# Brand Identity & Design System

This document outlines the core visual identity and design tokens used across the platform to ensure a consistent, premium user experience.

## 🎨 Color Palette

| Usage | Color / Gradient | Hex / Tailwind Value |
| :--- | :--- | :--- |
| **Primary Accent** | Purple | `#a855f7` |
| **Core Highlight** | Deep Violet | `#6D28D9` |
| **Vibrant Accent** | Pink | `#ec4899` |
| **Main Gradient** | Purple-Pink | `from-[#6D28D9] via-[#a855f7] to-[#ec4899]` |
| **Light BG** | Soft Indigo | `from-gray-50 via-blue-50 to-indigo-50` |
| **Dark High-Tech** | Obsidian | `#01010c` |
| **Text Primary** | Slate | `#0f172a` (Slate-900) |
| **Text Secondary**| Slate Gray | `#475569` (Slate-600) |

## 🖋️ Typography

- **Headings**: Use `font-extrabold` (800) or `font-black` (900) for all main section titles.
- **Brand Highlights**: Apply the solid purple color `#a855f7` to key emphasis keywords within titles.
- **Body Text**: Use `font-medium` (500) with `text-slate-600` for clear, professional readability.

## 🏢 Section Design Patterns

### 1. Light Professional Theme
- **Background**: `bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50`
- **Text**: `text-slate-900` for headers, `text-slate-600` for descriptions.
- **Emphasis**: Purple (`#a855f7`) title highlights.

### 2. High-Tech Dark Theme
- **Background**: Deep Obsidian (`#01010c`).
- **Overlays**: Translucent grid (`bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)]`).
- **Atmosphere**: Blue/Purple glowing pulses (`blur-[120px] animate-pulse`).
- **Cards**: Glassmorphism (`modern-card`) with translucent borders and hover lifts.

## 🚀 Components & Interaction

- **Buttons**: Always use the triple-stop purple-pink gradient (`from-[#6D28D9] via-[#a855f7] to-[#ec4899]`).
- **Cards**: 16px to 24px border radius (`rounded-2xl` or `rounded-3xl`).
- **Animations**: Subtle vertical lift (`hover:-translate-y-2`) and scale enhancements on hover.
