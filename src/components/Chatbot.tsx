import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Pos = { left: number; top: number };
type Message = { 
  id: number; 
  text: string; 
  from: 'user' | 'bot'; 
  time?: string;
  status?: 'sending' | 'sent' | 'delivered' | 'read';
  isTyping?: boolean;
};

const STORAGE_KEY = 'suresh_chatbot_pos_v2';
const FIRST_SEEN_KEY = 'suresh_chatbot_seen_v2';

const LAUNCHER_SIZE = 64;
const PANEL_WIDTH = 380;
const PANEL_HEIGHT = 520;

const formatTime = (d = new Date()) =>
  d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const formatDate = (d = new Date()) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  if (d.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (d.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  } else {
    return d.toLocaleDateString([], { month: 'short', day: 'numeric' });
  }
};

/* ------------------ Subcomponents ------------------ */

const MessageBubble: React.FC<{ m: Message }> = ({ m }) => (
  <div className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'} group animate-messageSlideIn`}>
    {m.from === 'bot' && (
      <div className="w-10 mr-3 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg ring-2 ring-white hover:scale-105 transition-transform duration-200">
          S
        </div>
      </div>
    )}
    <div className="flex flex-col max-w-[85%] sm:max-w-[80%]">
      <div
        className={`px-4 py-3 max-w-full shadow-lg break-words relative transition-all duration-200 hover:shadow-xl ${
          m.from === 'user'
            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl rounded-br-md'
            : 'bg-white text-slate-800 rounded-2xl rounded-bl-md border border-slate-100 hover:border-slate-200'
        }`}
        role="article"
        aria-label={`${m.from === 'user' ? 'You' : 'Assistant'} message`}
      >
        <div className="leading-relaxed whitespace-pre-wrap text-sm">{m.text}</div>
        <div className="flex items-center justify-between mt-2">
          <div
            className={`text-xs ${
              m.from === 'user' ? 'text-blue-100' : 'text-slate-400'
            }`}
          >
            {m.time}
          </div>
          {m.from === 'user' && m.status && (
            <div className="ml-2">
              {m.status === 'sending' && (
                <div className="w-3 h-3 border-2 border-blue-200 border-t-blue-100 rounded-full animate-spin"></div>
              )}
              {m.status === 'sent' && (
                <div className="text-blue-200 text-xs">✓</div>
              )}
              {m.status === 'delivered' && (
                <div className="text-blue-200 text-xs">✓✓</div>
              )}
              {m.status === 'read' && (
                <div className="text-blue-300 text-xs">✓✓</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const TypingIndicator = () => (
  <div
    className="flex justify-start animate-fadeIn"
    aria-live="polite"
    aria-label="Assistant is typing"
  >
      <div className="w-10 mr-3 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg ring-2 ring-white">
          S
        </div>
      </div>
    <div className="bg-white text-slate-800 rounded-2xl rounded-bl-md px-4 py-3 max-w-[60%] shadow-lg border border-slate-100">
      <div className="flex gap-1 items-center">
        <span className="text-slate-500 text-xs mr-2">AI is typing</span>
        {[0, 200, 400].map((delay) => (
          <span
            key={delay}
            className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"
            style={{ 
              animationDelay: `${delay}ms`,
              animationDuration: '1.2s'
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

const QuickReplies: React.FC<{ options: string[]; onClick: (s: string) => void }> = ({
  options,
  onClick,
}) => (
  <div className="flex gap-2 mt-3 flex-wrap">
    {options.map((o) => (
      <button
        key={o}
        onClick={() => onClick(o)}
        className="text-xs px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 transform hover:scale-105 shadow-sm border border-blue-100 hover:border-blue-200"
      >
        {o}
      </button>
    ))}
  </div>
);

const DateSeparator: React.FC<{ date: string }> = ({ date }) => (
  <div className="flex items-center justify-center my-4">
    <div className="bg-slate-100 text-slate-500 text-xs px-3 py-1 rounded-full">
      {date}
    </div>
  </div>
);

/* ------------------ Main Chatbot ------------------ */

const Chatbot: React.FC = () => {
  const launcherRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const [open, setOpen] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState<Pos>({ left: 0, top: 0 });
  const dragOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi! I'm Suresh's AI assistant. I can help you explore his portfolio, discuss AI services, or answer any questions you might have. How can I assist you today?",
      from: 'bot',
      time: formatTime(),
    },
  ]);
  const [input, setInput] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  const quickOptions = useMemo(
    () => [
      '🚀 View Portfolio', 
      '💼 AI Services', 
      '🏢 Industries', 
      '📊 Experience', 
      '📞 Contact Info',
      '❓ Help'
    ],
    []
  );

  /* ------------------ Effects ------------------ */

  // initialize position
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setPos(JSON.parse(saved) as Pos);
      } catch {}
    } else {
      setPos({
        left: window.innerWidth - LAUNCHER_SIZE - 20,
        top: window.innerHeight - LAUNCHER_SIZE - 24,
      });
    }

    const seen = localStorage.getItem(FIRST_SEEN_KEY);
    if (!seen) {
      setTimeout(() => {
        setOpen(true);
        localStorage.setItem(FIRST_SEEN_KEY, '1');
      }, 800);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pos));
  }, [pos]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    if (!panelRef.current) return;
    const scroller = panelRef.current.querySelector('.scroller') as HTMLElement | null;
    scroller?.scrollTo({ top: scroller.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  // Auto-close chatbot on scroll
  useEffect(() => {
    if (!open) return;

    const handleScroll = () => {
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set new timeout to close chatbot after scroll stops
      const timeout = setTimeout(() => {
        setOpen(false);
      }, 1500); // Close after 1.5 seconds of no scrolling

      setScrollTimeout(timeout);
    };

    // Add scroll listener to window
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [open, scrollTimeout]);

  /* ------------------ Handlers ------------------ */

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      (e.target as Element).setPointerCapture(e.pointerId);
      setDragging(true);
      dragOffset.current = {
        x: e.clientX - pos.left,
        y: e.clientY - pos.top,
      };
    },
    [pos]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      e.preventDefault();
      const left = Math.max(8, Math.min(e.clientX - dragOffset.current.x, window.innerWidth - LAUNCHER_SIZE - 8));
      const top = Math.max(8, Math.min(e.clientY - dragOffset.current.y, window.innerHeight - LAUNCHER_SIZE - 8));
      setPos({ left, top });
    },
    [dragging]
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      try {
        (e.target as Element).releasePointerCapture(e.pointerId);
      } catch {}
      setDragging(false);

      // snap horizontally
      const centerX = pos.left + LAUNCHER_SIZE / 2;
      const snapToLeft = centerX < window.innerWidth / 2;
      setPos({
        left: snapToLeft ? 16 : window.innerWidth - LAUNCHER_SIZE - 16,
        top: Math.max(8, Math.min(pos.top, window.innerHeight - LAUNCHER_SIZE - 8)),
      });
    },
    [pos]
  );

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      const id = Date.now();
      const time = formatTime();
      
      // Add user message with sending status
      setMessages((m) => [...m, { 
        id, 
        text, 
        from: 'user', 
        time, 
        status: 'sending' 
      }]);
      setInput('');
      setShowWelcome(false);

      // Update status to sent
      setTimeout(() => {
        setMessages((m) => 
          m.map(msg => 
            msg.id === id ? { ...msg, status: 'sent' as const } : msg
          )
        );
      }, 500);

      setIsTyping(true);
      
      // Simulate realistic response time
      const responseTime = Math.random() * 1000 + 800;
      const timer = setTimeout(() => {
        const bid = Date.now() + 1;
        const responses = [
          "That's a great question! Let me help you with that. I can provide detailed information about Suresh's AI expertise and services.",
          "I'd be happy to assist you with that! Suresh specializes in AI development, machine learning, and creating innovative solutions.",
          "Excellent! I can guide you through Suresh's portfolio and help you understand how his AI solutions can benefit your business.",
          "Perfect! Let me share some insights about Suresh's experience in AI development and the cutting-edge projects he's worked on.",
          "I'm here to help! Suresh has extensive experience in AI, machine learning, and creating intelligent solutions for various industries."
        ];
        
        setMessages((m) => [
          ...m,
          {
            id: bid,
            text: responses[Math.floor(Math.random() * responses.length)],
            from: 'bot',
            time: formatTime(),
          },
        ]);
        
        // Update user message status to delivered
        setMessages((m) => 
          m.map(msg => 
            msg.id === id ? { ...msg, status: 'delivered' as const } : msg
          )
        );
        
        setIsTyping(false);
      }, responseTime);

      return () => clearTimeout(timer);
    },
    []
  );

  /* ------------------ Render ------------------ */

  return (
    <div className="fixed z-50 pointer-events-none" style={{ left: 0, top: 0 }}>
      {/* Chat Panel */}
      {open && (
        <div
          ref={panelRef}
          className="pointer-events-auto bg-white rounded-3xl shadow-2xl text-sm text-slate-800 flex flex-col animate-fadeIn border border-slate-100 backdrop-blur-sm"
          style={{
            position: 'fixed',
            width: Math.min(PANEL_WIDTH, window.innerWidth - 16),
            height: Math.min(PANEL_HEIGHT, window.innerHeight - 32),
            left: window.innerWidth < 640 
              ? 8 
              : Math.min(
                  Math.max(
                    pos.left + LAUNCHER_SIZE / 2 - Math.min(PANEL_WIDTH, window.innerWidth - 32) / 2,
                    16
                  ),
                  window.innerWidth - Math.min(PANEL_WIDTH, window.innerWidth - 32) - 16
                ),
            top: window.innerWidth < 640 
              ? 8 
              : Math.max(16, pos.top - Math.min(PANEL_HEIGHT, window.innerHeight - 48) - 12),
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50 rounded-t-3xl">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg ring-2 ring-white">
                S
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm sm:text-base font-bold text-slate-800 truncate">Suresh AI Assistant</div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="text-xs text-slate-500 truncate">Online • Usually replies instantly</div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 flex-shrink-0"
              aria-label="Close chat panel"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            className="scroller px-4 sm:px-6 py-3 sm:py-4 overflow-auto flex-1 bg-gradient-to-b from-white to-slate-50"
            style={{ minHeight: 0 }}
            role="log"
            aria-live="polite"
          >
            <div className="space-y-4 sm:space-y-5">
              {showWelcome && (
                <div className="text-center py-3 sm:py-4">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    Welcome! How can I help you today?
                  </div>
                </div>
              )}
              {messages.map((m) => (
                <MessageBubble key={m.id} m={m} />
              ))}
              {isTyping && <TypingIndicator />}
            </div>
          </div>

          {/* Composer */}
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4 border-t border-slate-100 bg-white rounded-b-3xl">
            <QuickReplies options={quickOptions} onClick={sendMessage} />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="mt-3 sm:mt-4 flex items-end gap-2 sm:gap-3"
            >
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message here..."
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage(input);
                    }
                  }}
                  className="w-full resize-none bg-slate-50 border border-slate-200 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-sm min-h-[40px] sm:min-h-[44px] max-h-24 sm:max-h-32 overflow-auto outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all duration-200"
                  aria-label="Chat message input"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-xs hidden sm:block">
                  Press Enter to send
                </div>
              </div>
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-200 transform ${
                  !input.trim() || isTyping
                    ? 'bg-slate-300 cursor-not-allowed scale-95'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105 shadow-lg hover:shadow-xl'
                } text-white`}
                aria-label="Send message"
              >
                {isTyping ? (
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Launcher */}
      <div
        ref={launcherRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => setDragging(false)}
        style={{ left: pos.left, top: pos.top, position: 'fixed' }}
        className="pointer-events-auto select-none"
      >
        <button
          role="button"
          onClick={() => !dragging && setOpen((v) => !v)}
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-110 ${
            open 
              ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white' 
              : 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white hover:shadow-3xl'
          }`}
          aria-label={open ? "Close chat" : "Open chat"}
        >
          {open ? (
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
        
        {/* Notification badge */}
        {!open && (
          <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-notificationPulse">
            !
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
