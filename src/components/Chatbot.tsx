import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Pos = { left: number; top: number };
type Message = {
  id: number;
  text: string;
  from: 'user' | 'bot';
  time?: string;
  status?: 'sending' | 'sent' | 'delivered' | 'read';
  isTyping?: boolean;
  reactions?: string[];
  isLiked?: boolean;
  isPinned?: boolean;
  vectorSearchUsed?: boolean;
  contextLength?: number;
};

type QuickAction = {
  id: string;
  icon: string;
  label: string;
  action: () => void;
  color: string;
};

const STORAGE_KEY = 'suresh_chatbot_pos_v2';
const FIRST_SEEN_KEY = 'suresh_chatbot_seen_v2';

const LAUNCHER_SIZE = 52;
const PANEL_WIDTH = 360;
const PANEL_HEIGHT = 500;

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

const MessageBubble: React.FC<{
  m: Message;
  reactions?: string[];
  onReaction?: (reaction: string) => void;
}> = ({ m, reactions = [], onReaction }) => (
  <div className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'} group animate-messageSlideIn`}>
    {m.from === 'bot' && (
      <div className="w-8 mr-3 flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-lg ring-2 ring-white hover:scale-105 transition-transform duration-200">
          S
        </div>
      </div>
    )}
    <div className="flex flex-col max-w-[85%] sm:max-w-[80%]">
      <div
        className={`px-3.5 py-2.5 max-w-full shadow-md break-words relative transition-all duration-200 hover:shadow-lg group-hover:scale-[1.01] ${m.from === 'user'
          ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl rounded-br-md'
          : 'bg-white/95 backdrop-blur-sm text-slate-800 rounded-2xl rounded-bl-md border border-slate-200 hover:border-slate-300'
          }`}
        role="article"
        aria-label={`${m.from === 'user' ? 'You' : 'Assistant'} message`}
      >
        <div className="leading-relaxed whitespace-pre-wrap text-[13px]">{m.text}</div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <div
              className={`text-[11px] ${m.from === 'user' ? 'text-blue-100/90' : 'text-slate-400'
                }`}
            >
              {m.time}
            </div>

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
      {reactions.length > 0 && onReaction && (
        <div className="mt-1">
          <MessageReactions
            messageId={m.id}
            reactions={reactions}
            onReaction={onReaction}
          />
        </div>
      )}
    </div>
  </div>
);

const TypingIndicator = () => (
  <div
    className="flex justify-start animate-fadeIn"
    aria-live="polite"
    aria-label="Assistant is typing"
  >
    <div className="w-8 mr-3 flex-shrink-0">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-lg ring-2 ring-white">
        S
      </div>
    </div>
    <div className="bg-white text-slate-800 rounded-2xl rounded-bl-md px-3 py-2.5 max-w-[60%] shadow-md border border-slate-200">
      <div className="flex gap-1 items-center">
        <span className="text-slate-500 text-[11px] mr-2">typing</span>
        {[0, 200, 400].map((delay) => (
          <span
            key={delay}
            className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"
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
}) => {
  if (options.length === 0) return null;
  return (
    <div className="flex gap-2 mt-3 overflow-x-auto whitespace-nowrap no-scrollbar">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onClick(o)}
          className="text-xs px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 transform hover:scale-105 shadow-sm border border-blue-100 hover:border-blue-200 whitespace-nowrap flex-shrink-0"
        >
          {o}
        </button>
      ))}
    </div>
  );
};

const DateSeparator: React.FC<{ date: string }> = ({ date }) => (
  <div className="flex items-center justify-center my-4">
    <div className="bg-slate-100 text-slate-500 text-xs px-3 py-1 rounded-full">
      {date}
    </div>
  </div>
);

const MessageReactions: React.FC<{ messageId: number; reactions: string[]; onReaction: (reaction: string) => void }> = ({
  messageId,
  reactions,
  onReaction
}) => {
  const reactionEmojis = ['👍', '❤️', '😂', '😮', '😢', '😡'];

  return (
    <div className="flex gap-1 mt-2">
      {reactionEmojis.map((emoji) => (
        <button
          key={emoji}
          onClick={() => onReaction(emoji)}
          className={`text-xs px-2 py-1 rounded-full transition-all duration-200 hover:scale-110 ${reactions.includes(emoji)
            ? 'bg-blue-100 text-blue-600'
            : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
            }`}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

const FloatingActionMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  actions: QuickAction[]
}> = ({ isOpen, onClose, actions }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute bottom-16 right-3 z-50">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_30px_rgba(2,6,23,0.15)] border border-slate-200/50 p-2 animate-slideInUp">
        <div className="flex flex-col gap-1.5">
          {actions.map((action) => (
            <button
              key={action.id}
              onClick={action.action}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.02] ${action.color}`}
            >
              <span className="text-base">{action.icon}</span>
              <span className="text-[13px] font-medium text-slate-700">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const TypingSuggestions: React.FC<{
  suggestions: string[];
  onSelect: (suggestion: string) => void
}> = ({ suggestions, onSelect }) => {
  if (suggestions.length === 0) return null;

  return (
    <div className="absolute bottom-full left-0 right-0 mb-2 animate-slideInUp">
      <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-slate-200 p-2">
        <div className="text-xs text-slate-500 mb-2 px-2">Suggestions:</div>
        <div className="flex flex-wrap gap-1">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onSelect(suggestion)}
              className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ------------------ Main Chatbot ------------------ */

const Chatbot: React.FC = () => {
  console.log('Chatbot component is rendering'); // Debug log
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
      text: "Hi there! I’m Suresh’s AI Assistant. I’d be happy to walk you through his portfolio, share details about AI services, or answer any questions you have. How can I help today?",
      from: 'bot',
      time: formatTime(),
    },
  ]);
  const [input, setInput] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const [messageReactions, setMessageReactions] = useState<Record<number, string[]>>({});
  const [typingSuggestions, setTypingSuggestions] = useState<string[]>([]);

  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isOnline, setIsOnline] = useState(true);


  const quickOptions = useMemo(
    () => [],
    []
  );

  const floatingActions = useMemo<QuickAction[]>(() => [
    {
      id: 'status',
      icon: '🤖',
      label: 'Suresh AI Assistant',
      action: () => {
        setIsOnline(true);
      },
      color: 'hover:bg-green-50 text-green-600'
    },

    {
      id: 'sound',
      icon: soundEnabled ? '🔊' : '🔇',
      label: soundEnabled ? 'Sound On' : 'Sound Off',
      action: () => setSoundEnabled(!soundEnabled),
      color: 'hover:bg-green-50 text-green-600'
    },
    {
      id: 'clear',
      icon: '🗑️',
      label: 'Clear Chat',
      action: () => {
        setMessages([{
          id: 1,
          text: "👋 Hi! I'm Suresh AI Assistant. How can I help you today?",
          from: 'bot',
          time: formatTime(),
        }]);
        setShowWelcome(true);
      },
      color: 'hover:bg-red-50 text-red-600'
    },
    {
      id: 'minimize',
      icon: '➖',
      label: 'Minimize',
      action: () => setOpen(false),
      color: 'hover:bg-gray-50 text-gray-600'
    }
  ], [soundEnabled]);

  const smartSuggestions = useMemo(() => [
    'Tell me about your AI projects',
    'What services do you offer?',
    'Show me your portfolio',
    'How can I contact you?',
    'What technologies do you use?',
    'Do you provide custom AI solutions?',
    'Can you help with machine learning models?',
    'Do you offer chatbot development?',
    'What industries do you specialize in?',
    'Can you build web and mobile apps?',
    'What is your project turnaround time?',
    'Do you provide consultation services?',
    'Can I see client case studies?',
    'What is your pricing or hourly rate?',
    'Do you offer AI deployment support?',
    'Can you integrate AI into existing systems?',
    'Do you offer support after project delivery?',
    'How do you ensure data security?',
    'Can you help with AI model optimization?',
    'Do you offer maintenance for projects?'
  ], []);

  /* ------------------ Effects ------------------ */

  // Initialize chat status
  useEffect(() => {
    setIsOnline(true);
  }, []);

  // initialize position
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setPos(JSON.parse(saved) as Pos);
      } catch { }
    } else {
      setPos({
        left: window.innerWidth - LAUNCHER_SIZE - 80,
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

  // Smart typing suggestions
  useEffect(() => {
    if (input.length > 2) {
      const filtered = smartSuggestions.filter(s =>
        s.toLowerCase().includes(input.toLowerCase())
      );
      setTypingSuggestions(filtered.slice(0, 3));
    } else {
      setTypingSuggestions([]);
    }
  }, [input, smartSuggestions]);

  // Sound effects
  const playSound = useCallback((type: 'send' | 'receive' | 'notification') => {
    if (!soundEnabled) return;

    // Create audio context for sound effects
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    const frequencies = {
      send: [800, 1000],
      receive: [600, 800, 1000],
      notification: [1000, 1200, 800]
    };

    const freq = frequencies[type];
    oscillator.frequency.setValueAtTime(freq[0], audioContext.currentTime);
    if (freq.length > 1) {
      oscillator.frequency.setValueAtTime(freq[1], audioContext.currentTime + 0.1);
    }
    if (freq.length > 2) {
      oscillator.frequency.setValueAtTime(freq[2], audioContext.currentTime + 0.2);
    }

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  }, [soundEnabled]);

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
      } catch { }
      setDragging(false);

      // snap horizontally with a slightly larger right offset to keep icon away from edge
      const centerX = pos.left + LAUNCHER_SIZE / 2;
      const snapToLeft = centerX < window.innerWidth / 2;
      setPos({
        left: snapToLeft ? 16 : window.innerWidth - LAUNCHER_SIZE - 80,
        top: Math.max(8, Math.min(pos.top, window.innerHeight - LAUNCHER_SIZE - 8)),
      });
    },
    [pos]
  );

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return;
      const id = Date.now();
      const time = formatTime();

      // Play send sound
      playSound('send');

      // Add user message with sending status
      setMessages((m) => [...m, {
        id,
        text,
        from: 'user',
        time,
        status: 'sending',
        reactions: []
      }]);
      setInput('');
      setShowWelcome(false);
      setTypingSuggestions([]);

      // Update status to sent
      setTimeout(() => {
        setMessages((m) =>
          m.map(msg =>
            msg.id === id ? { ...msg, status: 'sent' as const } : msg
          )
        );
      }, 500);

      setIsTyping(true);

      try {
        // Try to call the Netlify function first
        let botResponse = '';
        let contextUsed = false;

        try {
          const response = await fetch('/.netlify/functions/test-chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: text }),
          });

          if (response.ok) {
            const data = await response.json();
            botResponse = data.response;
            contextUsed = data.contextUsed || false;
          } else {
            throw new Error(`API error: ${response.status}`);
          }
        } catch (apiError) {
          console.log('Netlify function not available, using local fallback');
          
          // Local fallback responses (same logic as the Netlify function)
          const lowerMessage = text.toLowerCase();
          
          if (lowerMessage.includes('year') || lowerMessage.includes('experience') || lowerMessage.includes('how long')) {
            botResponse = "Suresh has over 5+ years of experience in AI and machine learning development. He's worked across multiple industries including healthcare, fintech, legal tech, and e-commerce, delivering successful AI solutions.";
          } else if (lowerMessage.includes('portfolio') || lowerMessage.includes('project') || lowerMessage.includes('work')) {
            botResponse = "Suresh has worked on diverse AI projects including healthcare diagnostic tools, legal document analysis systems, e-commerce recommendation engines, and financial risk assessment models. Each project showcases his expertise in custom AI solutions.";
          } else if (lowerMessage.includes('service') || lowerMessage.includes('help') || lowerMessage.includes('offer') || lowerMessage.includes('machine learning')) {
            botResponse = "Suresh offers comprehensive AI services: custom machine learning model development, chatbot development, computer vision solutions, NLP systems, predictive analytics, and AI system integration. He specializes in creating tailored solutions for your specific business needs.";
          } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
            botResponse = "You can contact Suresh through the contact form on this website, connect with him on LinkedIn, or schedule a consultation call. He responds to inquiries within 24 hours and offers free initial consultations.";
          } else if (lowerMessage.includes('background') || lowerMessage.includes('about') || lowerMessage.includes('who')) {
            botResponse = "Suresh Beekhani is an experienced AI developer and consultant specializing in machine learning, deep learning, and AI system architecture. He has a proven track record of delivering successful AI solutions across multiple industries.";
          } else if (lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('skill') || lowerMessage.includes('tool')) {
            botResponse = "Suresh's technical expertise includes Python, TensorFlow, PyTorch, scikit-learn, Hugging Face Transformers, OpenAI APIs, LangChain, vector databases (Pinecone, Weaviate), cloud platforms (AWS, Google Cloud, Azure), and modern web technologies.";
          } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate') || lowerMessage.includes('pricing')) {
            botResponse = "Suresh offers flexible pricing models including hourly consulting rates, fixed-price project quotes, and retainer agreements. He provides detailed project estimates after understanding your specific requirements. Contact him for a personalized quote.";
          } else if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
            botResponse = "Hello! I'm Suresh's AI Assistant. I'm here to help you learn about his AI development services, portfolio projects, and expertise. What would you like to know about his work in artificial intelligence and machine learning?";
          } else {
            botResponse = "Thanks for your message! I'm Suresh's AI Assistant. Feel free to ask about his AI services, projects, experience, or how to get in touch. I'm here to help you learn more about his expertise in artificial intelligence and machine learning.";
          }
          
          contextUsed = true;
        }

        const bid = Date.now() + 1;
        setMessages((m) => [
          ...m,
          {
            id: bid,
            text: botResponse,
            from: 'bot',
            time: formatTime(),
            reactions: [],
            vectorSearchUsed: contextUsed,
            contextLength: contextUsed ? 1 : 0
          },
        ]);

        // Update user message status to delivered
        setMessages((m) =>
          m.map(msg =>
            msg.id === id ? { ...msg, status: 'delivered' as const } : msg
          )
        );

        setIsTyping(false);
        playSound('receive');
      } catch (error) {
        console.error('Error getting AI response:', error);

        // Final fallback error message
        const bid = Date.now() + 1;
        setMessages((m) => [
          ...m,
          {
            id: bid,
            text: "Thanks for your message! I'm Suresh's AI Assistant. I can help you learn about his AI development services, portfolio projects, and expertise. Please feel free to ask about his work or contact him directly through the contact form.",
            from: 'bot',
            time: formatTime(),
            reactions: []
          },
        ]);

        setIsTyping(false);
      }
    },
    [playSound]
  );

  const handleReaction = useCallback((messageId: number, reaction: string) => {
    setMessageReactions(prev => {
      const current = prev[messageId] || [];
      const updated = current.includes(reaction)
        ? current.filter(r => r !== reaction)
        : [...current, reaction];

      return {
        ...prev,
        [messageId]: updated
      };
    });
  }, []);

  const handleSuggestionSelect = useCallback((suggestion: string) => {
    setInput(suggestion);
    setTypingSuggestions([]);
  }, []);

  /* ------------------ Render ------------------ */

  return (
    <div className="fixed z-50 pointer-events-none" style={{ left: 0, top: 0 }}>
      {/* Chat Panel */}
      {open && (
        <div
          ref={panelRef}
          className="pointer-events-auto bg-white/90 backdrop-blur-2xl rounded-3xl shadow-[0_10px_30px_rgba(2,6,23,0.15)] text-sm text-slate-800 flex flex-col animate-fadeIn border border-slate-200/40 relative"
          style={{
            position: 'fixed',
            width: Math.min(PANEL_WIDTH, window.innerWidth - 12),
            height: Math.min(PANEL_HEIGHT, window.innerHeight - 24),
            left: window.innerWidth < 640
              ? 8
              : Math.min(
                Math.max(
                  pos.left + LAUNCHER_SIZE / 2 - Math.min(PANEL_WIDTH, window.innerWidth - 32) / 2,
                  16
                ),
                window.innerWidth - Math.min(PANEL_WIDTH, window.innerWidth - 24) - 12
              ),
            top: window.innerWidth < 640
              ? 8
              : Math.max(12, pos.top - Math.min(PANEL_HEIGHT, window.innerHeight - 36) - 10),
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3.5 border-b border-slate-200/50 bg-gradient-to-r from-slate-50 to-blue-50/60 rounded-t-3xl">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-xs sm:text-sm shadow-md ring-2 ring-white/80">
                S
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[13px] sm:text-[14px] font-semibold text-slate-800 tracking-tight truncate"> Suresh AI Assistant </div>            <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  <div className="text-[11px] text-slate-500 truncate">
                     Usually replies instantly
                  </div>

                </div>
                {/* Database stats hidden intentionally */}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFloatingMenu(!showFloatingMenu)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                aria-label="More options"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 flex-shrink-0"
                aria-label="Close chat panel"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            className="scroller px-3 sm:px-4 py-2.5 sm:py-3 overflow-auto flex-1 bg-gradient-to-b from-white to-slate-50"
            style={{ minHeight: 0 }}
            role="log"
            aria-live="polite"
          >
            <div className="space-y-4 sm:space-y-5">
              {showWelcome && (
                <div className="text-center py-2.5 sm:py-3">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    Welcome! How can I help you today?
                  </div>
                </div>
              )}

              {messages.map((m) => (
                <MessageBubble
                  key={m.id}
                  m={m}
                  reactions={messageReactions[m.id] || []}
                  onReaction={(reaction) => handleReaction(m.id, reaction)}
                />
              ))}
              {isTyping && <TypingIndicator />}
            </div>
          </div>

          {/* Composer */}
          <div className="px-3 sm:px-4 pb-3.5 sm:pb-5 pt-2.5 sm:pt-3.5 border-t border-slate-100 bg-white/90 backdrop-blur-sm rounded-b-3xl relative">

            <QuickReplies options={quickOptions} onClick={sendMessage} />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="mt-2.5 sm:mt-3.5 flex items-end gap-2 sm:gap-2.5 relative"
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
                  className="w-full resize-none bg-white/80 backdrop-blur-sm border border-slate-300 rounded-2xl px-3 sm:px-3.5 py-2 sm:py-2.5 text-[13px] min-h-[36px] sm:min-h-[40px] max-h-24 sm:max-h-32 overflow-auto outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all duration-200 placeholder:text-slate-400"
                  aria-label="Chat message input"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-xs hidden sm:block">
                  Press Enter to send
                </div>
                <TypingSuggestions
                  suggestions={typingSuggestions}
                  onSelect={handleSuggestionSelect}
                />
              </div>
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 transform ${!input.trim() || isTyping
                  ? 'bg-slate-300 cursor-not-allowed scale-95'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 shadow-lg hover:shadow-xl'
                  } text-white`}
                aria-label="Send message"
              >
                {isTyping ? (
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </form>
          </div>

          {/* Floating Action Menu */}
          <FloatingActionMenu
            isOpen={showFloatingMenu}
            onClose={() => setShowFloatingMenu(false)}
            actions={floatingActions}
          />
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
          onClick={() => {
            if (!dragging) {
              setOpen((v) => !v);
              playSound('notification');
            }
          }}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-110 relative overflow-hidden ${open
            ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white'
            : 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white hover:shadow-3xl'
            }`}
          aria-label={open ? "Close chat" : "Open chat"}
        >
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>

          {open ? (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>

        {/* Notification badge */}
        {!open && (
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold animate-notificationPulse shadow-lg">
            !
          </div>
        )}

        {/* Floating particles effect */}
        {!open && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-1/3 left-1/3 w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-2/3 right-1/3 w-0.5 h-0.5 bg-indigo-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
