# Codexveer - Modern IT Company Website

A production-grade, fully responsive website for a modern service-based IT company built with React, Redux Toolkit, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: React 19, Vite, Redux Toolkit, React Router, Tailwind CSS
- **Beautiful Animations**: Framer Motion for smooth, delightful interactions
- **State Management**: Redux Toolkit with async thunks for data fetching
- **Component Library**: shadcn/ui components for consistent design
- **Fully Responsive**: Mobile-first approach with hamburger menu
- **Performance Optimized**: Fast loading, smooth animations
- **Clean Architecture**: Organized folder structure, reusable components

## 📦 Tech Stack

- React 19.2.4
- Redux Toolkit (state management)
- React Router DOM (routing)
- Tailwind CSS (styling)
- Framer Motion (animations)
- shadcn/ui (component library)
- Lucide React (icons)
- Vite (build tool)

## 🎨 Design System

- **Colors**: 
  - Primary: Burnt Orange (#ff6a3d)
  - Secondary: Muted Teal (#2a9d8f)
  - Accent: Soft Gold (#e9c46a)
  - Background: Warm Neutral (#f5f3ef)
  - Dark: Deep Charcoal (#0f1115)

- **Typography**: Inter font family
- **Style**: Soft shadows, rounded corners, generous whitespace

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── sections/        # Page sections
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   └── HomePage.jsx
├── redux/
│   ├── store.js
│   └── slices/
│       ├── servicesSlice.js
│       ├── testimonialsSlice.js
│       └── projectsSlice.js
├── lib/
│   └── utils.js
├── App.jsx
└── main.jsx
```

## 🛠️ Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 📝 Sections

1. **Hero Section** - Bold headline with animated background
2. **Services Section** - 3 service cards with hover animations
3. **Process Section** - 4-step process (Discover → Design → Develop → Deploy)
4. **Projects Section** - Featured case studies with images
5. **Testimonials Section** - Sliding carousel with smooth transitions
6. **CTA Section** - Contact information and call-to-action
7. **Footer** - Links and social media

## 🎯 Redux Implementation

- Services data fetched via `fetchServices` async thunk
- Testimonials data fetched via `fetchTestimonials` async thunk
- Projects data fetched via `fetchProjects` async thunk
- Loading states handled for each slice
- Error handling implemented

## 🎨 Animations

- Hero text stagger animation
- Scroll-based reveal animations
- Card hover effects (scale, shadow)
- Button hover effects
- Page transitions
- Smooth carousel transitions

## 📱 Responsive Design

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Hamburger menu for mobile navigation

## 🚀 Performance

- Lazy loading ready
- Optimized animations
- Clean code structure
- Minimal re-renders

---

Built with ❤️ by Codexveer Technologies
