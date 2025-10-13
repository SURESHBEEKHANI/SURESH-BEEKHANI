# Design Document: Theme Toggle Feature

## Overview

This design document outlines the implementation of a light/dark mode theme toggle for the website. The solution leverages the existing Tailwind CSS dark mode configuration (`darkMode: ["class"]`) and integrates seamlessly with the current React application architecture. The implementation will use React Context for state management, localStorage for persistence, and provide a polished UI component in the navigation bar.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Application Root                      │
│                      (App.tsx)                          │
│  ┌───────────────────────────────────────────────────┐  │
│  │         ThemeProvider (Context)                   │  │
│  │  - Manages theme state                            │  │
│  │  - Handles localStorage persistence               │  │
│  │  - Applies theme class to <html>                  │  │
│  │  - Detects system preference                      │  │
│  └───────────────────────────────────────────────────┘  │
│                          │                              │
│          ┌───────────────┴───────────────┐              │
│          │                               │              │
│    ┌─────▼─────┐                  ┌──────▼──────┐      │
│    │  Navbar   │                  │   Pages &   │      │
│    │           │                  │ Components  │      │
│    │ ┌───────┐ │                  │             │      │
│    │ │ Theme │ │                  │  (consume   │      │
│    │ │Toggle │ │                  │   theme)    │      │
│    │ └───────┘ │                  │             │      │
│    └───────────┘                  └─────────────┘      │
└─────────────────────────────────────────────────────────┘
```

### Component Hierarchy

1. **ThemeProvider** (Context Provider)
   - Wraps the entire application
   - Provides theme state and toggle function
   - Manages side effects (localStorage, DOM manipulation)

2. **ThemeToggle** (UI Component)
   - Consumes theme context
   - Renders toggle button with icons
   - Handles user interactions

3. **useTheme** (Custom Hook)
   - Provides access to theme context
   - Simplifies component integration

## Components and Interfaces

### 1. Theme Context

**File:** `src/contexts/ThemeContext.tsx`

```typescript
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
```

**Responsibilities:**
- Provide theme state to all components
- Expose theme toggle and setter functions
- Ensure type safety with TypeScript

### 2. Theme Provider Component

**File:** `src/contexts/ThemeContext.tsx`

```typescript
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: 'light' | 'dark' | 'system';
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme-preference'
}: ThemeProviderProps)
```

**Key Features:**
- Initialize theme from localStorage or system preference
- Apply theme class to `<html>` element
- Persist theme changes to localStorage
- Handle system preference detection via `prefers-color-scheme`
- Prevent flash of unstyled content (FOUC)

**Implementation Details:**
- Use `useEffect` to apply theme on mount and changes
- Use `useState` for theme state management
- Listen to system preference changes (optional enhancement)
- Apply/remove 'dark' class on document.documentElement

### 3. useTheme Hook

**File:** `src/hooks/useTheme.ts`

```typescript
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

**Purpose:**
- Provide convenient access to theme context
- Ensure hook is used within provider
- Type-safe theme access

### 4. ThemeToggle Component

**File:** `src/components/ThemeToggle.tsx`

```typescript
interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ 
  className, 
  showLabel = false 
}: ThemeToggleProps)
```

**UI Design:**
- Button with icon (Sun for light mode, Moon for dark mode)
- Smooth icon transition animation
- Tooltip showing current action ("Switch to dark mode")
- Accessible with keyboard navigation
- Focus visible indicator
- ARIA labels for screen readers

**Visual States:**
- Default: Icon with subtle background
- Hover: Background color change, scale effect
- Focus: Visible focus ring
- Active: Pressed state animation

**Icon Library:**
- Use `lucide-react` icons (Sun, Moon)
- Consistent with existing icon usage in Navbar

### 5. Theme Initialization Script

**File:** `index.html` (inline script in `<head>`)

```html
<script>
  (function() {
    const theme = localStorage.getItem('theme-preference') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  })();
</script>
```

**Purpose:**
- Execute before React hydration
- Prevent FOUC by applying theme immediately
- Synchronous execution in `<head>`

## Data Models

### Theme State

```typescript
type Theme = 'light' | 'dark';

interface ThemeState {
  current: Theme;
  preference: 'light' | 'dark' | 'system';
}
```

### LocalStorage Schema

```typescript
// Key: 'theme-preference'
// Value: 'light' | 'dark' | 'system'
{
  "theme-preference": "dark"
}
```

## Integration Points

### 1. App.tsx Integration

Wrap the application with ThemeProvider:

```typescript
import { ThemeProvider } from '@/contexts/ThemeContext';

const App = () => (
  <ErrorBoundary>
    <ThemeProvider defaultTheme="system" storageKey="theme-preference">
      <QueryClientProvider client={queryClient}>
        {/* existing app structure */}
      </QueryClientProvider>
    </ThemeProvider>
  </ErrorBoundary>
);
```

### 2. Navbar Integration

Add ThemeToggle component to Navbar:

```typescript
import { ThemeToggle } from '@/components/ThemeToggle';

// In desktop navigation (before Contact button)
<div className="hidden lg:flex items-center space-x-3">
  <ThemeToggle />
  <Button>Contact</Button>
</div>

// In mobile menu (after nav links)
<div className="px-4 py-3">
  <ThemeToggle className="w-full" showLabel />
</div>
```

### 3. CSS Transitions

Add smooth transitions to `index.css`:

```css
@layer base {
  * {
    @apply transition-colors;
    transition-duration: 200ms;
  }
  
  /* Prevent transitions on page load */
  .no-transition * {
    transition: none !important;
  }
}
```

## Error Handling

### 1. Context Not Found

```typescript
// In useTheme hook
if (!context) {
  throw new Error('useTheme must be used within ThemeProvider');
}
```

### 2. LocalStorage Unavailable

```typescript
// Graceful fallback
try {
  localStorage.setItem('theme-preference', theme);
} catch (error) {
  console.warn('Unable to save theme preference:', error);
  // Continue with in-memory state only
}
```

### 3. Invalid Theme Value

```typescript
// Validate and sanitize
const storedTheme = localStorage.getItem('theme-preference');
const validTheme = ['light', 'dark', 'system'].includes(storedTheme) 
  ? storedTheme 
  : 'system';
```

## Testing Strategy

### 1. Unit Tests

**ThemeProvider Tests:**
- ✓ Initializes with system preference when no stored value
- ✓ Initializes with stored preference when available
- ✓ Applies 'dark' class to html element when theme is dark
- ✓ Removes 'dark' class when theme is light
- ✓ Persists theme changes to localStorage
- ✓ Handles localStorage errors gracefully

**useTheme Hook Tests:**
- ✓ Throws error when used outside provider
- ✓ Returns theme context when used inside provider

**ThemeToggle Tests:**
- ✓ Renders correct icon for current theme
- ✓ Toggles theme when clicked
- ✓ Shows correct tooltip text
- ✓ Is keyboard accessible (Enter/Space)
- ✓ Has proper ARIA attributes

### 2. Integration Tests

- ✓ Theme persists across page navigation
- ✓ Theme applies to all components consistently
- ✓ No FOUC on page load
- ✓ Theme toggle in Navbar works correctly
- ✓ Mobile menu theme toggle works correctly

### 3. Accessibility Tests

- ✓ Theme toggle is keyboard navigable
- ✓ Focus indicator is visible
- ✓ Screen reader announces theme state
- ✓ Color contrast meets WCAG AA standards in both themes
- ✓ Respects prefers-reduced-motion

### 4. Browser Compatibility Tests

- ✓ Works in Chrome, Firefox, Safari, Edge
- ✓ localStorage fallback works when unavailable
- ✓ System preference detection works
- ✓ No console errors in any browser

## Performance Considerations

### 1. Initial Load Optimization

- Inline script in `<head>` executes synchronously
- Minimal JavaScript before first paint
- No layout shift when theme is applied

### 2. Runtime Performance

- Theme state changes trigger minimal re-renders
- CSS transitions are GPU-accelerated
- No expensive computations in render path

### 3. Bundle Size

- Minimal additional code (~2-3KB)
- No external dependencies beyond existing lucide-react
- Tree-shakeable exports

## Accessibility Features

### 1. Keyboard Navigation

- Tab to focus theme toggle
- Enter or Space to activate
- Focus visible indicator

### 2. Screen Reader Support

```typescript
<button
  aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
  aria-pressed={theme === 'dark'}
  role="switch"
>
```

### 3. Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .theme-toggle {
    transition: none;
  }
}
```

### 4. Color Contrast

- Ensure all text meets WCAG AA standards (4.5:1 for normal text)
- Test with existing color variables in both themes
- Verify icon visibility in both themes

## Design Decisions and Rationales

### 1. Context API vs Redux

**Decision:** Use React Context API

**Rationale:**
- Theme state is simple (single value)
- No complex state updates or middleware needed
- Reduces bundle size
- Consistent with existing app architecture (no Redux currently)

### 2. Class-based vs Attribute-based Dark Mode

**Decision:** Use class-based (`dark` class on `<html>`)

**Rationale:**
- Already configured in Tailwind config
- Better browser support
- Easier to debug in DevTools
- Consistent with Tailwind best practices

### 3. localStorage vs Cookies

**Decision:** Use localStorage

**Rationale:**
- No server-side rendering (CSR only)
- Simpler API
- No cookie consent requirements
- Larger storage capacity

### 4. System Preference Detection

**Decision:** Support system preference as default

**Rationale:**
- Better user experience (respects OS settings)
- Modern web standard
- Fallback to light mode if not supported

### 5. Toggle Button Placement

**Decision:** Place in Navbar, before Contact button

**Rationale:**
- Prominent and easily accessible
- Consistent with common UI patterns
- Doesn't interfere with primary navigation
- Visible on all pages

### 6. Icon Choice

**Decision:** Sun/Moon icons from lucide-react

**Rationale:**
- Already used in the project
- Clear visual metaphor
- Universally recognized
- Accessible and scalable

## Future Enhancements

### Phase 2 (Optional)

1. **System Preference Sync**
   - Listen to system theme changes in real-time
   - Auto-update theme when OS setting changes

2. **Theme Customization**
   - Allow users to customize accent colors
   - Provide multiple theme variants

3. **Smooth Transitions**
   - Add view transition API for smoother theme changes
   - Animate background color changes

4. **Analytics**
   - Track theme preference usage
   - Analyze user behavior patterns

## Dependencies

### Existing Dependencies (No New Installs Required)

- `react` - Context and hooks
- `lucide-react` - Icons (Sun, Moon)
- `tailwindcss` - Dark mode styling
- TypeScript - Type safety

### No Additional Dependencies Needed

The implementation uses only existing project dependencies, keeping the bundle size minimal.

## Migration Path

### Step 1: Create Theme Infrastructure
- Create ThemeContext and ThemeProvider
- Create useTheme hook
- Add inline script to index.html

### Step 2: Integrate with App
- Wrap App with ThemeProvider
- Test theme switching functionality

### Step 3: Add UI Component
- Create ThemeToggle component
- Add to Navbar (desktop and mobile)
- Style and test interactions

### Step 4: Polish and Test
- Add CSS transitions
- Test accessibility
- Test across browsers
- Verify no FOUC

## Rollback Plan

If issues arise:

1. Remove ThemeToggle from Navbar
2. Remove ThemeProvider wrapper from App
3. Remove inline script from index.html
4. Delete theme-related files

The existing Tailwind dark mode configuration remains unchanged, allowing for easy rollback without affecting other parts of the application.
