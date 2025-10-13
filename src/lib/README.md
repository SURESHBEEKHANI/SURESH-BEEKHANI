# Animation Foundation & Design System

This directory contains the core animation utilities and design tokens for the premium UI upgrade.

## Files Overview

### `animations.ts`
Centralized animation configurations and variants for Framer Motion.

**Key Exports:**
- `animationConfig` - Duration, easing, and spring configurations
- Common animation variants: `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`, `scaleIn`, `scaleInSpring`
- Stagger animations: `staggerContainer`, `staggerItem`
- Hover effects: `hoverLift`, `hoverLiftShadow`, `hoverScale`, `hoverGlow`
- Component-specific variants: `navbarVariants`, `heroVariants`, `cardVariants`, etc.
- Utility functions: `createStaggerDelay`, `createFadeInVariant`, `createScaleVariant`

**Usage Example:**
```tsx
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

function MyComponent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={staggerItem}>Title</motion.h1>
      <motion.p variants={staggerItem}>Description</motion.p>
    </motion.div>
  );
}
```

### `designTokens.ts`
Centralized design system configuration including colors, typography, spacing, shadows, and more.

**Key Exports:**
- `colors` - Complete color palette with shades
- `typography` - Font families, sizes, weights, letter spacing
- `spacing` - Consistent spacing scale
- `shadows` - Shadow system including colored and glow variants
- `borderRadius` - Border radius scale
- `transitions` - Transition durations and timing functions
- `gradients` - Pre-defined gradient patterns
- `glassmorphism` - Glassmorphism effect configurations
- Utility functions: `withOpacity`, `createShadow`

**Usage Example:**
```tsx
import { colors, spacing, shadows } from '@/lib/designTokens';

const styles = {
  backgroundColor: colors.primary[500],
  padding: spacing[4],
  boxShadow: shadows.large,
};
```

## Custom Hooks (`../hooks/useAnimations.ts`)

### `useReducedMotion()`
Detects if user prefers reduced motion for accessibility.

```tsx
const prefersReducedMotion = useReducedMotion();

return (
  <motion.div
    animate={prefersReducedMotion ? {} : { y: -10 }}
  >
    Content
  </motion.div>
);
```

### `useScrollAnimation(options?)`
Hook for scroll-triggered animations using Framer Motion's `useInView`.

```tsx
const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

return (
  <motion.div
    ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={fadeInUp}
  >
    Content
  </motion.div>
);
```

### `useInView(options?)`
More flexible viewport detection using IntersectionObserver.

```tsx
const { ref, isInView } = useInView({ threshold: 0.5 });

return (
  <div ref={ref}>
    {isInView && <p>Element is in view!</p>}
  </div>
);
```

### `useAnimationPerformance(enabled)`
Monitors animation FPS for debugging.

```tsx
const fps = useAnimationPerformance(true);
console.log('Current FPS:', fps);
```

### `useScrollProgress()`
Returns scroll progress as a value between 0 and 1.

```tsx
const scrollProgress = useScrollProgress();

return (
  <motion.div
    style={{ scaleX: scrollProgress }}
    className="progress-bar"
  />
);
```

### `useMousePosition()`
Tracks mouse position for parallax effects.

```tsx
const { x, y } = useMousePosition();

return (
  <motion.div
    style={{
      x: x * 0.1,
      y: y * 0.1,
    }}
  >
    Parallax content
  </motion.div>
);
```

### `useViewportSize()`
Returns current viewport dimensions.

```tsx
const { width, height } = useViewportSize();

return (
  <div>
    Viewport: {width}x{height}
  </div>
);
```

## Best Practices

### 1. Respect Reduced Motion
Always check for reduced motion preferences:

```tsx
const prefersReducedMotion = useReducedMotion();

<motion.div
  animate={prefersReducedMotion ? {} : { scale: 1.1 }}
/>
```

### 2. Use Scroll Animations Wisely
Trigger animations once to avoid repetitive motion:

```tsx
const { ref, isInView } = useScrollAnimation({ triggerOnce: true });
```

### 3. Optimize Performance
- Use `transform` and `opacity` for GPU acceleration
- Avoid animating `width`, `height`, or `top/left/right/bottom`
- Use `will-change` sparingly

```tsx
// Good ✅
<motion.div animate={{ x: 100, opacity: 0.5 }} />

// Avoid ❌
<motion.div animate={{ width: 100, marginTop: 20 }} />
```

### 4. Consistent Timing
Use predefined durations and easing from `animationConfig`:

```tsx
import { animationConfig } from '@/lib/animations';

<motion.div
  transition={{
    duration: animationConfig.duration.normal,
    ease: animationConfig.easing.easeOut,
  }}
/>
```

### 5. Stagger Children
Use stagger containers for sequential animations:

```tsx
<motion.div variants={staggerContainer} initial="hidden" animate="visible">
  {items.map((item, i) => (
    <motion.div key={i} variants={staggerItem}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

## Design Token Usage

### Colors
```tsx
import { colors } from '@/lib/designTokens';

// Use specific shades
<div style={{ color: colors.primary[500] }} />

// Use with Tailwind (configure in tailwind.config.ts)
<div className="text-primary-500" />
```

### Spacing
```tsx
import { spacing } from '@/lib/designTokens';

<div style={{ padding: spacing[4], margin: spacing[8] }} />
```

### Shadows
```tsx
import { shadows } from '@/lib/designTokens';

<div style={{ boxShadow: shadows.large }} />
<div style={{ boxShadow: shadows.colored.primary }} />
```

### Glassmorphism
```tsx
import { glassmorphism } from '@/lib/designTokens';

<div style={{
  background: glassmorphism.light.background,
  backdropFilter: glassmorphism.light.backdropFilter,
  border: glassmorphism.light.border,
}} />
```

## Animation Patterns

### Entrance Animation
```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
>
  Content
</motion.div>
```

### Hover Effect
```tsx
<motion.button
  whileHover={hoverLift}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Scroll-Triggered
```tsx
const { ref, isInView } = useScrollAnimation();

<motion.div
  ref={ref}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  variants={fadeInUp}
>
  Content
</motion.div>
```

### Custom Stagger
```tsx
{items.map((item, i) => (
  <motion.div
    key={i}
    custom={i}
    variants={cardVariants}
    initial="hidden"
    animate="visible"
  >
    {item}
  </motion.div>
))}
```

## Troubleshooting

### Animations Not Working
1. Ensure Framer Motion is installed: `npm install framer-motion`
2. Check that `initial` and `animate` props are set
3. Verify variants are properly defined

### Performance Issues
1. Use `useAnimationPerformance` to monitor FPS
2. Reduce number of simultaneous animations
3. Use `will-change` CSS property sparingly
4. Consider using CSS animations for simple effects

### TypeScript Errors
1. Ensure all imports are correct
2. Check that custom types are properly defined
3. Use type assertions if needed: `as const`
