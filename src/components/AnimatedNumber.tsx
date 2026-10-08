import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useReducedMotion, useScrollAnimation } from '@/hooks/useAnimations';

const AnimatedNumber = ({ number }: { number: string }) => {
  const prefersReducedMotion = useReducedMotion();
  const target = Number.parseInt(number, 10);
  const suffix = number.slice(String(target).length);
  const count = useMotionValue(0);
  const display = useTransform(count, (value) => `${Math.round(value)}${suffix}`);
  const { ref, isInView } = useScrollAnimation({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      count.set(target);
      return;
    }

    const controls = animate(count, target, { duration: 1.8, ease: 'easeOut' });
    return () => controls.stop();
  }, [count, isInView, prefersReducedMotion, target]);

  return (
    <>
      <span className="sr-only">{number}</span>
      <motion.span ref={ref} aria-hidden="true">{display}</motion.span>
    </>
  );
};

export default AnimatedNumber;
