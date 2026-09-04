import { motion, useReducedMotion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
  const prefersReducedMotion = useReducedMotion();
  const sizes = {
    sm: 20,
    md: 32,
    lg: 48,
  };
  const dimension = sizes[size];

  return (
    <div className={`inline-flex items-center justify-center ${className}`} role="status" aria-label="Loading">
      <motion.div
        className="relative"
        style={{ width: dimension, height: dimension }}
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
          <circle cx="24" cy="24" r="19" fill="none" stroke="#111111" strokeWidth="3" />
          <motion.circle
            cx="24"
            cy="24"
            r="19"
            fill="none"
            stroke="#B6FF00"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="30 90"
            animate={prefersReducedMotion ? undefined : { pathLength: [0.24, 0.42, 0.24] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <circle cx="24" cy="24" r="3" fill="#FFFFFF" />
          <circle cx="24" cy="24" r="1.5" fill="#B6FF00" />
        </svg>
      </motion.div>
    </div>
  );
};

export const LoadingOverlay = ({ message = 'Loading...' }: { message?: string }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#050505] px-6 backdrop-blur-sm"
      style={{
        backgroundImage: 'radial-gradient(ellipse 70% 55% at 50% -10%, rgba(182,255,0,0.14) 0%, rgba(125,204,0,0.05) 38%, transparent 74%), radial-gradient(ellipse 45% 55% at 100% 100%, rgba(125,204,0,0.08) 0%, transparent 72%), linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: 'auto, auto, 56px 56px, 56px 56px',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="status"
      aria-live="polite"
    >
      <motion.div
        className="relative flex min-w-[220px] flex-col items-center gap-5 border border-white/10 bg-[#111111]/90 px-8 py-9 shadow-2xl"
        initial={prefersReducedMotion ? false : { scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <LoadingSpinner size="lg" />
        <p className="text-center text-sm font-medium tracking-wide text-white/75">{message}</p>
      </motion.div>
    </motion.div>
  );
};
