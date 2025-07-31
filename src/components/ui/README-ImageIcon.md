# ImageIcon Component System

## Overview

The ImageIcon component system provides optimized, high-quality image-based icons with lazy loading, responsive design, and accessibility features.

## Features

### ✅ **Performance Optimizations**
- **Lazy Loading**: Images load only when needed
- **Priority Loading**: Critical icons can be loaded eagerly
- **Image Compression**: Optimized for web delivery
- **Responsive Sizing**: Automatic scaling for different screen sizes

### ✅ **Accessibility**
- **Alt Text**: Descriptive alt attributes for screen readers
- **Focus States**: Keyboard navigation support
- **Error Handling**: Graceful fallbacks for failed loads
- **ARIA Support**: Proper semantic markup

### ✅ **Design System**
- **Consistent Styling**: Unified appearance across components
- **Dark Mode**: Automatic theme adaptation
- **Hover Effects**: Interactive feedback
- **Smooth Animations**: Framer Motion integration

### ✅ **Developer Experience**
- **TypeScript**: Full type safety
- **Reusable Components**: Pre-built icon components
- **Customizable**: Flexible props for different use cases
- **Error Boundaries**: Robust error handling

## Usage

### Basic Usage

```tsx
import { ImageIcon } from '@/components/ui/ImageIcon';

<ImageIcon
  src="/image/skills_img/openai.jpg"
  alt="AI-powered research icon"
  size="md"
  className="mb-2"
/>
```

### Pre-built Icons

```tsx
import { 
  LegalIcon, 
  AiIcon, 
  SecurityIcon,
  AnalyticsIcon,
  CloudIcon,
  CodeIcon 
} from '@/components/ui/ImageIcon';

// Use in your components
<LegalIcon size="lg" className="mb-4" />
<AiIcon size="md" />
<SecurityIcon size="sm" />
```

### Custom Icons

```tsx
import { ImageIcon } from '@/components/ui/ImageIcon';

const CustomIcon = ({ className = "mb-1", size = 'md' }) => (
  <ImageIcon
    src="/path/to/your/icon.png"
    alt="Custom icon description"
    className={className}
    size={size}
    priority={true} // For above-the-fold icons
  />
);
```

## Props

### ImageIcon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL (required) |
| `alt` | `string` | - | Alt text for accessibility (required) |
| `className` | `string` | `""` | Additional CSS classes |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Icon size |
| `priority` | `boolean` | `false` | Load image eagerly |
| `fallbackIcon` | `string` | `'🔧'` | Fallback emoji for errors |
| `onError` | `(error: Event) => void` | - | Custom error handler |
| `onLoad` | `() => void` | - | Custom load handler |

### Size Classes

| Size | Mobile | Desktop |
|------|--------|---------|
| `sm` | 24px | 32px |
| `md` | 32px | 40px |
| `lg` | 40px | 48px |
| `xl` | 48px | 64px |

## Available Icons

### Core Icons
- `LegalIcon` - Legal document generation
- `AiIcon` - AI-powered research
- `SecurityIcon` - Privacy and security
- `AnalyticsIcon` - Analytics and summaries
- `CloudIcon` - Cloud-based access
- `CodeIcon` - Modern tech stack

### Development Icons
- `DevelopmentIcon` - Development process
- `FeedbackIcon` - Feedback and iteration
- `ApiIcon` - API integration
- `ExpertiseIcon` - Domain expertise
- `ComplianceIcon` - Compliance and standards
- `ArchitectureIcon` - System architecture

## Best Practices

### 1. **Image Optimization**
- Use WebP or optimized PNG/JPG formats
- Keep file sizes under 50KB for icons
- Use appropriate dimensions (64x64px minimum)

### 2. **Accessibility**
- Always provide descriptive alt text
- Test with screen readers
- Ensure sufficient color contrast

### 3. **Performance**
- Use `priority={true}` for above-the-fold icons
- Implement proper error handling
- Monitor loading performance

### 4. **Responsive Design**
- Test on different screen sizes
- Use appropriate size props
- Consider mobile-first approach

## Error Handling

The component includes robust error handling:

```tsx
<ImageIcon
  src="/image/skills_img/example.png"
  alt="Example icon"
  fallbackIcon="📄"
  onError={(error) => {
    console.error('Icon failed to load:', error);
    // Custom error handling
  }}
/>
```

## CSS Customization

The component includes CSS for additional styling:

```css
/* Custom hover effects */
.image-icon:hover {
  transform: scale(1.1);
}

/* Custom loading states */
.image-icon.loading {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
}
```

## Migration from SVG Icons

To migrate from SVG icons to image-based icons:

1. **Replace SVG components**:
   ```tsx
   // Old
   const OldIcon = ({ className }) => (
     <svg className={className}>...</svg>
   );
   
   // New
   const NewIcon = ({ className }) => (
     <ImageIcon
       src="/image/skills_img/new-icon.png"
       alt="New icon description"
       className={className}
     />
   );
   ```

2. **Update imports**:
   ```tsx
   // Old
   import { OldIcon } from './old-icons';
   
   // New
   import { NewIcon } from '@/components/ui/ImageIcon';
   ```

3. **Test thoroughly**:
   - Check loading states
   - Verify error handling
   - Test accessibility
   - Validate responsive behavior

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## Performance Metrics

- **Lazy Loading**: Reduces initial bundle size
- **Image Optimization**: Faster loading times
- **Error Handling**: Graceful degradation
- **Accessibility**: WCAG 2.1 AA compliant 