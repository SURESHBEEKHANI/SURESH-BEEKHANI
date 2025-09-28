import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Pos = { left: number; top: number };
type Message = { id: number; text: string; from: 'user' | 'bot'; time?: string };

const STORAGE_KEY = 'suresh_chatbot_pos_v1';
const FIRST_SEEN_KEY = 'suresh_chatbot_seen_v1';

const LAUNCHER_SIZE = 56;
const PANEL_WIDTH = 360;
const PANEL_HEIGHT = 460;

const formatTime = (d = new Date()) =>
  d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

/* ------------------ Subcomponents ------------------ */

const MessageBubble: React.FC<{ m: Message }> = ({ m }) => (
  <div className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
    {m.from === 'bot' && (
      <div className="w-8 mr-3 flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 text-xs">
          S
        </div>
      </div>
    )}
    <div
      className={`px-4 py-2 max-w-[80%] shadow-sm break-words ${
        m.from === 'user'
          ? 'bg-blue-600 text-white rounded-2xl rounded-br-sm'
          : 'bg-slate-50 text-slate-800 rounded-2xl rounded-bl-sm'
      }`}
      role="article"
      aria-label={`${m.from === 'user' ? 'You' : 'Assistant'} message`}
    >
      <div className="leading-tight whitespace-pre-wrap">{m.text}</div>
      <div
        className={`text-[10px] mt-1 ${
          m.from === 'user' ? 'text-blue-100' : 'text-slate-400'
        }`}
      >
        {m.time}
      </div>
    </div>
  </div>
);

const TypingIndicator = () => (
  <div
    className="flex justify-start"
    aria-live="polite"
    aria-label="Assistant is typing"
  >
    <div className="w-8 mr-3 flex-shrink-0">
      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 text-xs">
        S
      </div>
    </div>
    <div className="bg-slate-50 text-slate-800 rounded-2xl rounded-bl-sm px-4 py-2 max-w-[60%] shadow-sm">
      <div className="flex gap-1 items-center">
        {[0, 75, 150].map((delay) => (
          <span
            key={delay}
            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
            style={{ animationDelay: `${delay}ms` }}
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
  <div className="flex gap-2 mt-2 flex-wrap">
    {options.map((o) => (
      <button
        key={o}
        onClick={() => onClick(o)}
        className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
      >
        {o}
      </button>
    ))}
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
      text: "Hi — I'm Suresh's AI assistant. How can I help you today?",
      from: 'bot',
      time: formatTime(),
    },
  ]);
  const [input, setInput] = useState('');

  const quickOptions = useMemo(
    () => ['About', 'Portfolio', 'Services', 'Industries', 'Experience', 'Contact'],
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
      setMessages((m) => [...m, { id, text, from: 'user', time }]);
      setInput('');

      setIsTyping(true);
      const timer = setTimeout(() => {
        const bid = Date.now() + 1;
        setMessages((m) => [
          ...m,
          {
            id: bid,
            text: 'Thanks — I can help with that. Want examples or next steps?',
            from: 'bot',
            time: formatTime(),
          },
        ]);
        setIsTyping(false);
      }, 700);

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
          className="pointer-events-auto bg-white rounded-2xl shadow-2xl text-sm text-slate-800 flex flex-col animate-fadeIn"
          style={{
            position: 'fixed',
            width: Math.min(PANEL_WIDTH, window.innerWidth - 32),
            height: Math.min(PANEL_HEIGHT, window.innerHeight - 48),
            left: Math.min(
              Math.max(
                pos.left + LAUNCHER_SIZE / 2 - Math.min(PANEL_WIDTH, window.innerWidth - 32) / 2,
                16
              ),
              window.innerWidth - Math.min(PANEL_WIDTH, window.innerWidth - 32) - 16
            ),
            top: Math.max(16, pos.top - Math.min(PANEL_HEIGHT, window.innerHeight - 48) - 12),
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
                AI
              </div>
              <div>
                <div className="text-sm font-semibold">Suresh AI Assistant</div>
                <div className="text-xs text-slate-500">Typically replies in a few seconds</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-sm text-slate-600 px-3 py-1 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
              aria-label="Close chat panel"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            className="scroller px-4 py-3 overflow-auto flex-1"
            style={{ minHeight: 0 }}
            role="log"
            aria-live="polite"
          >
            <div className="space-y-4">
              {messages.map((m) => (
                <MessageBubble key={m.id} m={m} />
              ))}
              {isTyping && <TypingIndicator />}
            </div>
          </div>

          {/* Composer */}
          <div className="px-4 pb-4 pt-2 border-t border-slate-100">
            <QuickReplies options={quickOptions} onClick={sendMessage} />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="mt-3 flex items-end gap-2"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(input);
                  }
                }}
                className="flex-1 resize-none bg-slate-50 border border-slate-200 rounded-2xl px-3 py-2 text-sm min-h-[36px] max-h-40 overflow-auto outline-none"
                aria-label="Chat message input"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  !input.trim() || isTyping
                    ? 'bg-blue-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white transition`}
                aria-label="Send message"
              >
                ➤
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
          className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-[0_8px_24px_rgba(16,24,40,0.12)] hover:scale-105 transform transition-transform"
          aria-label="Open chat"
        >
          💬
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
