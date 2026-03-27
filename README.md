# Codexveer - Premium IT Company Website

A production-grade, fully responsive website for Codexveer - a modern service-based IT company. Built with cutting-edge technologies and featuring stunning Aceternity UI components for a unique, premium look.

## Features

### Design & UI
- **Aceternity UI Components**: Spotlight effects, Typewriter animations, Lamp effects, and Animated Testimonials
- **Dark/Light Mode**: Seamless theme switching with persistent preferences
- **Glassmorphism**: Modern frosted glass effects throughout
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Scroll Progress Indicator**: Beautiful gradient progress bar
- **Marquee Text**: Continuously scrolling service/tech showcases
- **Floating Elements**: Animated icons and background orbs

### Technical Features
- **Redux Toolkit**: Complete state management with async thunks
- **React Router**: Client-side routing with smooth transitions
- **Responsive Design**: Mobile-first approach, fully responsive
- **Performance Optimized**: Fast loading, smooth 60fps animations
- **TypeScript Ready**: Clean, scalable architecture
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **React** 18.3.1 - UI library
- **Redux Toolkit** 2.0.1 - State management
- **React Router DOM** 6.21.1 - Routing
- **Tailwind CSS** 3.4.1 - Styling
- **Framer Motion** 10.18.0 - Animations
- **Vite** 8.0.1 - Build tool
- **Lucide React** - Icons
- **Tabler Icons** - Additional icons

## Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd codexveer

# Install dependencies
npm install

# Start development server
npm run dev
```

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Design System

### Colors
- **Primary**: Burnt Orange (#ff6a3d) - Main brand color
- **Secondary**: Muted Teal (#2a9d8f) - Accent color
- **Accent**: Soft Gold (#e9c46a) - Highlights
- **Background**: Warm Neutral (#f5f3ef) - Light mode
- **Dark Background**: Deep Charcoal (#0f1115) - Dark mode

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, tight letter-spacing
- **Body**: Clean, readable with optimal line-height

## Project Structure

```
codexveer/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── spotlight.jsx
│   │   │   ├── typewriter-effect.jsx
│   │   │   ├── animated-testimonials.jsx
│   │   │   ├── lamp.jsx
│   │   │   └── progress.jsx
│   │   ├── sections/        # Page sections
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── ProcessSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   └── CTASection.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeProvider.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── MarqueeText.jsx
│   ├── pages/
│   │   └── HomePage.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── slices/
│   │       ├── servicesSlice.js
│   │       ├── testimonialsSlice.js
│   │       └── projectsSlice.js
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Key Sections

### 1. Hero Section
- Typewriter effect animation
- Spotlight background effect
- Floating animated icons
- Grid background pattern
- Animated gradient orbs
- Trust badges
- Statistics cards

### 2. Services Section
- 3 service cards with hover effects
- Icon-based visual hierarchy
- Technology tags
- Smooth reveal animations

### 3. Process Section
- 4-step workflow (Discover → Design → Develop → Deploy)
- Icon-based timeline
- Hover animations on cards

### 4. Projects Section
- Featured case studies
- Image hover overlays
- Technology stack badges
- Category labels

### 5. Testimonials Section
- Aceternity Animated Testimonials
- 3D card stack effect
- Auto-play carousel
- Professional photos
- Blur text reveal animation

### 6. CTA Section
- Lamp effect background
- Contact information cards
- Call-to-action button
- Gradient animations

### 7. Additional Features
- Scrolling marquee text (2 sections)
- Scroll progress indicator
- Dark/light mode toggle
- Responsive navigation with hamburger menu

## Redux Implementation

### Slices
- **servicesSlice**: Manages service data with async thunk
- **testimonialsSlice**: Handles testimonial data fetching
- **projectsSlice**: Manages project/case study data

### Async Thunks
All data fetching uses `createAsyncThunk` with:
- Loading states
- Success handling
- Error handling
- Mock API delays for realistic UX

## Animations

### Framer Motion Effects
- Stagger children animations
- Scroll-triggered reveals
- Hover scale and lift effects
- Page transitions
- Typewriter text effect
- Spotlight animations
- Lamp effect
- 3D card rotations

### Performance
- Optimized animation loops
- GPU-accelerated transforms
- Smooth 60fps animations
- Reduced motion support

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

```bash
# Build for production
npm run build

# The dist/ folder is ready to deploy
```

Deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Environment Variables

No environment variables required for basic setup.

## Contributing

This is a portfolio/showcase project. Feel free to fork and customize for your own use.

## License

MIT License - feel free to use this project for your own purposes.

## Credits

- **Aceternity UI** - For amazing component inspiration
- **shadcn/ui** - For component architecture patterns
- **Tailwind CSS** - For utility-first styling
- **Framer Motion** - For smooth animations
- **Unsplash** - For testimonial images


Built with care by Codexveer Technologies

**Note**: This is a modern, production-ready website showcasing best practices in React development, state management, and UI/UX design. Perfect for IT companies, agencies, or freelancers looking for a premium web presence.
