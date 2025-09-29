import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ragApi, type RAGResponse, type DatabaseInfo } from '../services/ragApi';

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

const LAUNCHER_SIZE = 64;
const PANEL_WIDTH = 420;
const PANEL_HEIGHT = 580;

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
      <div className="w-10 mr-3 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg ring-2 ring-white hover:scale-105 transition-transform duration-200">
          S
        </div>
      </div>
    )}
    <div className="flex flex-col max-w-[85%] sm:max-w-[80%]">
      <div
        className={`px-4 py-3 max-w-full shadow-lg break-words relative transition-all duration-200 hover:shadow-xl group-hover:scale-[1.02] ${
          m.from === 'user'
            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl rounded-br-md'
            : 'bg-white/90 backdrop-blur-sm text-slate-800 rounded-2xl rounded-bl-md border border-slate-100 hover:border-slate-200'
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
          className={`text-xs px-2 py-1 rounded-full transition-all duration-200 hover:scale-110 ${
            reactions.includes(emoji)
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
    <div className="absolute bottom-20 right-4 z-50">
      <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-2 animate-slideInUp">
        <div className="flex flex-col gap-2">
          {actions.map((action) => (
            <button
              key={action.id}
              onClick={action.action}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 ${action.color}`}
            >
              <span className="text-lg">{action.icon}</span>
              <span className="text-sm font-medium">{action.label}</span>
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
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const [messageReactions, setMessageReactions] = useState<Record<number, string[]>>({});
  const [typingSuggestions, setTypingSuggestions] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isRagConnected, setIsRagConnected] = useState(false);
  const [ragError, setRagError] = useState<string | null>(null);
  const [databaseInfo, setDatabaseInfo] = useState<DatabaseInfo | null>(null);
  const [selectedNamespace, setSelectedNamespace] = useState<string>("default");

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

  const floatingActions = useMemo<QuickAction[]>(() => [
    {
      id: 'rag-status',
      icon: isRagConnected ? '🤖' : '⚠️',
      label: isRagConnected ? 'AI Connected' : 'AI Disconnected',
      action: async () => {
        try {
          const isHealthy = await ragApi.checkHealth();
          setIsRagConnected(isHealthy);
          setRagError(isHealthy ? null : 'RAG server is not available');
        } catch (error) {
          setIsRagConnected(false);
          setRagError('Failed to connect to RAG server');
        }
      },
      color: isRagConnected ? 'hover:bg-green-50 text-green-600' : 'hover:bg-red-50 text-red-600'
    },
    {
      id: 'search',
      icon: '🔍',
      label: 'Search Messages',
      action: () => setShowSearch(!showSearch),
      color: 'hover:bg-blue-50 text-blue-600'
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
          text: "👋 Hi! I'm Suresh's AI assistant. How can I help you today?",
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
  ], [soundEnabled, showSearch, isRagConnected]);

  const smartSuggestions = useMemo(() => [
    'Tell me about your AI projects',
    'What services do you offer?',
    'Show me your portfolio',
    'How can I contact you?',
    'What technologies do you use?'
  ], []);

  /* ------------------ Effects ------------------ */

  // Check RAG API health and database info on mount
  useEffect(() => {
    const checkRagHealth = async () => {
      try {
        const isHealthy = await ragApi.checkHealth();
        setIsRagConnected(isHealthy);
        setRagError(isHealthy ? null : 'RAG server is not available');
        
        if (isHealthy) {
          // Get database information
          const dbInfo = await ragApi.detectDatabase();
          setDatabaseInfo(dbInfo);
          
          // Set default namespace if available
          if (dbInfo && dbInfo.namespaces.length > 0) {
            setSelectedNamespace(dbInfo.namespaces[0]);
          }
        }
      } catch (error) {
        setIsRagConnected(false);
        setRagError('Failed to connect to RAG server');
      }
    };

    checkRagHealth();
  }, []);

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
      setRagError(null);
      
      try {
        // Call RAG API with selected namespace
        const response: RAGResponse = await ragApi.query(text, selectedNamespace);
        
        const bid = Date.now() + 1;
        setMessages((m) => [
          ...m,
          {
            id: bid,
            text: response.answer,
            from: 'bot',
            time: formatTime(),
            reactions: []
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
        console.error('RAG API Error:', error);
        
        // Fallback response when RAG is not available
        const bid = Date.now() + 1;
        const fallbackResponse = isRagConnected 
          ? "I'm sorry, I encountered an error processing your request. Please try again."
          : "I'm currently unable to access my knowledge base. Please make sure the RAG server is running and try again.";
        
        setMessages((m) => [
          ...m,
          {
            id: bid,
            text: fallbackResponse,
            from: 'bot',
            time: formatTime(),
            reactions: []
          },
        ]);
        
        // Update user message status to delivered
        setMessages((m) => 
          m.map(msg => 
            msg.id === id ? { ...msg, status: 'delivered' as const } : msg
          )
        );
        
        setIsTyping(false);
        setRagError(error instanceof Error ? error.message : 'Unknown error');
        playSound('receive');
      }
    },
    [playSound, isRagConnected]
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
          className="pointer-events-auto bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl text-sm text-slate-800 flex flex-col animate-fadeIn border border-white/20 relative"
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
                  <div className={`w-2 h-2 rounded-full animate-pulse ${
                    isRagConnected ? 'bg-green-400' : 'bg-red-400'
                  }`}></div>
                  <div className="text-xs text-slate-500 truncate">
                    {isRagConnected ? 'AI Ready • Usually replies instantly' : 'AI Offline • Limited responses'}
                  </div>
                </div>
                {/* Database stats hidden intentionally */}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFloatingMenu(!showFloatingMenu)}
                className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                aria-label="More options"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
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
              {ragError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="text-xs text-red-600 font-medium">Connection Error</div>
                  </div>
                  <div className="text-xs text-red-500 mt-1">{ragError}</div>
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
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4 border-t border-slate-100 bg-white/90 backdrop-blur-sm rounded-b-3xl relative">
            {/* Namespace Selector */}
            {databaseInfo && databaseInfo.namespaces.length > 1 && (
              <div className="mb-3">
                <div className="text-xs text-slate-500 mb-2">Search in:</div>
                <div className="flex gap-1 flex-wrap">
                  {databaseInfo.namespaces.map((namespace) => (
                    <button
                      key={namespace}
                      onClick={() => setSelectedNamespace(namespace)}
                      className={`text-xs px-3 py-1 rounded-full transition-all duration-200 ${
                        selectedNamespace === namespace
                          ? 'bg-blue-100 text-blue-700 border border-blue-200'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {namespace}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <QuickReplies options={quickOptions} onClick={sendMessage} />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="mt-3 sm:mt-4 flex items-end gap-2 sm:gap-3 relative"
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
                  className="w-full resize-none bg-slate-50/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-sm min-h-[40px] sm:min-h-[44px] max-h-24 sm:max-h-32 overflow-auto outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all duration-200"
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
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-110 relative overflow-hidden ${
            open 
              ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white' 
              : 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white hover:shadow-3xl'
          }`}
          aria-label={open ? "Close chat" : "Open chat"}
        >
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          
          {open ? (
            <svg className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
        
        {/* Notification badge */}
        {!open && (
          <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-notificationPulse shadow-lg">
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
