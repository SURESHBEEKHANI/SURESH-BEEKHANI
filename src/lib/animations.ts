/**
 * Animation Utilities and Variants
 * Centralized animation configurations for Framer Motion
 */

import { Variants, Transition } from 'framer-motion';

// ============================================
// ANIMATION CONFIGURATION
// ============================================

export const animationConfig = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  easing: {
    easeOut: [0.0, 0.0, 0.2, 1],
    easeIn: [0.4, 0.0, 1, 1],
    easeInOut: [0.4, 0.0, 0.2, 1],
  },
  spring: {
    stiff: { type: 'spring' as const, stiffness: 260, damping: 20 },
    gentle: { type: 'spring' as const, stiffness: 120, damping: 14 },
    bouncy: { type: 'spring' as const, stiffness: 300, damping: 10 },
  },
} as const;

// ============================================
// COMMON ANIMATION VARIANTS
// ============================================

/**
 * Fade In Animation
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: animationConfig.duration.normal },
  },
};

/**
 * Fade In Up Animation
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: animationConfig.duration.normal, ease: animationConfig.easing.easeOut },
  },
};

/**
 * Fade In Down Animation
 */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: animationConfig.duration.normal, ease: animationConfig.easing.easeOut },
  },
};

/**
 * Fade In Left Animation
 */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: animationConfig.duration.normal, ease: animationConfig.easing.easeOut },
  },
};

/**
 * Fade In Right Animation
 */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: animationConfig.duration.normal, ease: animationConfig.easing.easeOut },
  },
};

/**
 * Scale In Animation
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: animationConfig.duration.normal, ease: animationConfig.easing.easeOut },
  },
};

/**
 * Scale In with Spring
 */
export const scaleInSpring: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: animationConfig.spring.stiff,
  },
};

/**
 * Stagger Container
 * Use with staggerChildren to create sequential animations
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Stagger Item
 * Use as child of staggerContainer
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: animationConfig.duration.normal },
  },
};

// ============================================
// HOVER ANIMATIONS
// ============================================

/**
 * Lift on Hover
 */
export const hoverLift = {
  scale: 1.05,
  y: -4,
  transition: { duration: animationConfig.duration.fast },
};

/**
 * Lift with Shadow
 */
export const hoverLiftShadow = {
  y: -8,
  scale: 1.02,
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
  transition: { duration: animationConfig.duration.fast },
};

/**
 * Scale on Hover
 */
export const hoverScale = {
  scale: 1.05,
  transition: { duration: animationConfig.duration.fast },
};

/**
 * Glow on Hover
 */
export const hoverGlow = {
  boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
  transition: { duration: animationConfig.duration.fast },
};

// ============================================
// COMPONENT-SPECIFIC VARIANTS
// ============================================

/**
 * Navbar Variants
 */
export const navbarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: animationConfig.duration.normal, ease: animationConfig.easing.easeOut },
  },
};

/**
 * Menu Item Variants (with custom delay)
 */
export const menuItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: animationConfig.duration.normal },
  }),
};

/**
 * Hero Variants
 */
export const heroVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: animationConfig.easing.easeOut },
  },
};

/**
 * Avatar Variants (with spring)
 */
export const avatarVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      ...animationConfig.spring.stiff,
      delay: 0.2,
    },
  },
};

/**
 * Stats Variants (with custom delay)
 */
export const statsVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.1, duration: 0.4 },
  }),
};

/**
 * Card Variants
 */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: animationConfig.duration.fast },
  },
};

/**
 * Service Card Variants
 */
export const serviceCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: animationConfig.duration.fast },
  },
};

/**
 * Benefit Variants
 */
export const benefitVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.1, duration: animationConfig.duration.normal },
  }),
};

/**
 * Input Focus Variants
 */
export const inputFocusVariants = {
  focus: {
    scale: 1.02,
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
    transition: { duration: animationConfig.duration.fast },
  },
};

/**
 * Button Variants
 */
export const buttonVariants: Variants = {
  idle: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

// ============================================
// SCROLL ANIMATION CONFIGURATION
// ============================================

export const scrollAnimationConfig = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
  triggerOnce: true,
};

// ============================================
// TRANSITION PRESETS
// ============================================

export const transitions = {
  fast: { duration: animationConfig.duration.fast, ease: animationConfig.easing.easeOut },
  normal: { duration: animationConfig.duration.normal, ease: animationConfig.easing.easeOut },
  slow: { duration: animationConfig.duration.slow, ease: animationConfig.easing.easeOut },
  spring: animationConfig.spring.gentle,
  springStiff: animationConfig.spring.stiff,
  springBouncy: animationConfig.spring.bouncy,
} as const;

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Create a stagger delay for child elements
 */
export const createStaggerDelay = (index: number, baseDelay = 0, staggerAmount = 0.1) => {
  return baseDelay + index * staggerAmount;
};

/**
 * Create custom fade in variant with configurable direction
 */
export const createFadeInVariant = (
  direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'up',
  distance = 20
): Variants => {
  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return {
    hidden: { opacity: 0, ...offset[direction] },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: animationConfig.duration.normal, ease: animationConfig.easing.easeOut },
    },
  };
};

/**
 * Create custom scale variant
 */
export const createScaleVariant = (initialScale = 0.9, useSpring = false): Variants => {
  return {
    hidden: { opacity: 0, scale: initialScale },
    visible: {
      opacity: 1,
      scale: 1,
      transition: useSpring
        ? animationConfig.spring.gentle
        : { duration: animationConfig.duration.normal, ease: animationConfig.easing.easeOut },
    },
  };
};
