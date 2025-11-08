import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useReducedMotion } from '@/hooks/useAnimations';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  threshold?: number;
}

/**
 * Professional animated section wrapper that respects user preferences
 * and provides consistent animation behavior across the app
 */
export const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  stagger = false,
  threshold = 0.1
}: AnimatedSectionProps) => {
  const { ref, isInView } = useScrollAnimation({ threshold, triggerOnce: true });
  const prefersReducedMotion = useReducedMotion();

  const variants = stagger ? staggerContainer : fadeInUp;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={prefersReducedMotion ? undefined : variants}
      initial={prefersReducedMotion ? false : 'hidden'}
      animate={isInView && !prefersReducedMotion ? 'visible' : prefersReducedMotion ? false : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};
