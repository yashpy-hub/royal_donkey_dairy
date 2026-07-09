# Rudra Dairy & Farm - Complete Website Package

## 🎯 Project Overview

This is a **complete, production-ready website** for Rudra Dairy & Farm - a premium donkey milk seller. The website features advanced animations, dark/light mode toggle, and modern tech stack optimizations.

## ✨ Key Features

### 🌙 Dark/Light Mode
- **Theme Toggle Button** - Located in the navigation bar (sun/moon icon)
- **Smooth Transitions** - 300ms color transitions between themes
- **Persistent Storage** - Theme preference saved in browser
- **Complete Coverage** - All pages support both light and dark modes

### 🎬 Advanced Animations
- **Slide-In Animations** - Content slides in from top/bottom with fade
- **Scale & Fade Effects** - Elements fade in while scaling up
- **Hover Animations** - Cards scale and glow on hover
- **Pulse Glow** - Pulsing glow effect on key CTAs
- **Float Animation** - Subtle floating effect on elements
- **Shimmer Effect** - Shimmering loading animation

### 📱 Responsive Design
- Mobile-first approach
- Fully responsive navigation with hamburger menu
- Optimized for all screen sizes (mobile, tablet, desktop)

### 🎨 Premium Design
- **Color Palette**: Warm terracotta (#C17A5C), Forest green (#2D5016), Golden cream (#F5E6D3)
- **Typography**: Playfair Display (headings), Lora (body), Inter (labels)
- **Dark Mode Colors**: Optimized for eye comfort with lighter terracotta and green accents

### 📄 Complete Pages
1. **Home** - Hero section with impressive farm imagery
2. **Products** - Detailed product showcase (Fresh Milk, Yogurt, Cheese)
3. **About Founder** - Yash's profile with contact information
4. **Trust & Values** - Business integrity and transparency
5. **Certifications** - FSSAI, ISO, IEC, HACCP compliance
6. **Contact** - Contact form and inquiry options

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Extract the ZIP file
unzip rudra-dairy-farm_complete.zip
cd rudra-dairy-farm

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The website will be available at `http://localhost:3000`

## 📦 Project Structure

```
rudra-dairy-farm/
├── client/
│   ├── src/
│   │   ├── pages/           # All page components
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # Theme context for dark/light mode
│   │   ├── App.tsx          # Main app with routing
│   │   ├── index.css        # Global styles with animations
│   │   └── main.tsx         # Entry point
│   ├── public/              # Static assets
│   └── index.html           # HTML template
├── server/                  # Server configuration
├── package.json             # Dependencies
└── vite.config.ts           # Vite configuration
```

## 🎨 Customization

### Change Colors
Edit `client/src/index.css` - Update CSS variables in `:root` and `.dark` sections:

```css
:root {
  --primary: #C17A5C;           /* Primary color */
  --secondary: #F5E6D3;         /* Secondary color */
  --accent: #2D5016;            /* Accent color */
}

.dark {
  --primary: #E8A76F;           /* Dark mode primary */
  --background: #0F0E0C;        /* Dark background */
  --foreground: #F5E6D3;        /* Dark text */
}
```

### Update Contact Information
Edit `client/src/components/Footer.tsx` and `client/src/pages/Contact.tsx`:
- Email: yashpawar.py@gmail.com
- Phone: +91 96571 42020
- Social handles: Instagram, Facebook

### Add/Remove Pages
1. Create new page in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Add navigation link in `client/src/components/Navigation.tsx`

## 🎬 Animation Classes

Available animation utilities in `index.css`:

```tsx
// Slide animations
<div className="animate-slide-in-up">Content</div>
<div className="animate-slide-in-down">Content</div>

// Scale animations
<div className="animate-fade-scale">Content</div>

// Glow effects
<div className="animate-glow">Content</div>
<div className="animate-pulse-glow">Content</div>

// Float animation
<div className="animate-float">Content</div>
```

## 🌙 Theme Toggle Implementation

The theme toggle is automatically included in the Navigation component. Users can:
1. Click the sun/moon icon in the top right
2. Theme preference is saved to localStorage
3. All pages automatically update colors

To use theme in components:

```tsx
import { useTheme } from "@/contexts/ThemeContext";

export default function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

## 🚀 Build & Deploy

### Build for Production
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm preview
```

## 📊 Performance Optimizations

- ✅ Lazy loading for images
- ✅ CSS animations (GPU accelerated)
- ✅ Optimized bundle size
- ✅ Smooth 60 FPS transitions
- ✅ Dark mode reduces eye strain
- ✅ Responsive images with webp format

## 🔧 Tech Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS 4
- **Routing**: Wouter
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📝 Contact Information

**Founder**: Yash Pawar
- **Email**: yashpawar.py@gmail.com
- **Phone**: +91 96571 42020
- **Instagram**: @rudradairyandfarm
- **Facebook**: Rudra Dairy & Farm

## 🎯 Business Models Supported

- ✅ B2B Partnerships
- ✅ B2C Retail
- ✅ Wholesale Distribution
- ✅ Retail Store Partnerships

## 📄 Certifications

- ✅ FSSAI (Food Safety and Standards Authority of India)
- ✅ ISO (International Organization for Standardization)
- ✅ IEC (Import Export Code - India)
- ✅ HACCP (Hazard Analysis and Critical Control Points)

## 🎓 Learning Resources

- Tailwind CSS: https://tailwindcss.com
- React: https://react.dev
- Vite: https://vitejs.dev
- shadcn/ui: https://ui.shadcn.com

## 📞 Support

For issues or questions, contact:
- Email: yashpawar.py@gmail.com
- Phone: +91 96571 42020

---

**Version**: 1.0.0
**Last Updated**: March 27, 2026
**License**: MIT

Enjoy your premium Rudra Dairy & Farm website! 🐴🥛
