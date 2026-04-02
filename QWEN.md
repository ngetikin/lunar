# Lunar Community - Project Context

## Project Overview

**Lunar Community** is a modern, premium landing page for an online community platform. Built as a single-page React application, it serves as the digital home for a creative and chill community focused on connection, creativity, and growth.

### Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 6 |
| **Language** | TypeScript 5.8 |
| **Styling** | Tailwind CSS 4 (with `@tailwindcss/vite`) |
| **Animations** | Motion (motion/react) |
| **Icons** | Lucide React |
| **AI Integration** | Google Generative AI (`@google/genai`) |

### Architecture

- **Entry Point**: `src/main.tsx` - React root mounting
- **Main App**: `src/App.tsx` - Composes all landing page sections
- **Components**: `src/components/LandingPage.tsx` - Contains all page sections:
  - `Navbar` - Fixed navigation with blur backdrop
  - `Hero` - Full-screen hero with animated elements
  - `About` - Community introduction
  - `Values` - Core values grid (Chill & Fun, Supportive, Creative, Growth)
  - `Activities` - Community activities showcase
  - `Memories` - Photo gallery with masonry layout
  - `Status` - Community status update section
  - `Social` - Instagram integration
  - `DiscordCTA` - Call-to-action for Discord
  - `Footer` - Site footer with navigation

### Design System

- **Color Palette**:
  - Primary Green: `#2E7D5B`
  - Hover Green: `#3FA37A`
  - Dark Gray: `#1A1A1A`
  - Background: Black (`#000000`)

- **Typography**:
  - Sans-serif: Inter
  - Serif: Playfair Display (headings)

- **Visual Effects**:
  - `glow-green` - Green box-shadow glow
  - `text-glow-green` - Green text shadow
  - `bg-mesh` - Radial gradient background

## Building and Running

### Prerequisites

- Node.js (latest LTS recommended)
- npm

### Setup

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your GEMINI_API_KEY
```

### Development

```bash
# Start development server (port 3000)
npm run dev
```

**Note**: HMR can be disabled by setting `DISABLE_HMR=true` in environment (used in AI Studio).

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Clean build artifacts
npm run clean
```

### Linting

```bash
# TypeScript type checking
npm run lint
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Google Gemini API key for AI features |
| `APP_URL` | The deployed URL (auto-injected in Cloud Run) |
| `DISABLE_HMR` | Set to `true` to disable HMR |

## Development Conventions

### Code Style

- **TypeScript**: Strict typing with `noEmit` for type-checking only
- **React**: Functional components with hooks
- **Imports**: Path alias `@/*` resolves to project root
- **JSX**: Using `react-jsx` transform

### Component Structure

Components follow a consistent pattern:
- Motion animations using `motion` from `motion/react`
- Icons from `lucide-react`
- Tailwind CSS for styling
- Responsive design with `md:` and `lg:` breakpoints

### File Organization

```
lunar/
├── src/
│   ├── main.tsx          # Entry point
│   ├── App.tsx           # Main app component
│   ├── index.css         # Global styles & Tailwind config
│   └── components/
│       └── LandingPage.tsx  # All landing page sections
├── public/
│   └── lunar.png         # Favicon
├── index.html            # HTML template
├── package.json          # Dependencies & scripts
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
└── .env.example          # Environment template
```

## Key Features

1. **Smooth Animations**: Scroll-triggered animations using Motion
2. **Responsive Design**: Mobile-first with Tailwind breakpoints
3. **Custom Scrollbar**: Styled scrollbar matching the theme
4. **External Links**: Discord and Instagram integration
5. **Image Placeholders**: Uses Unsplash and Picsum for demo images

## External Links

- **Discord**: https://discord.com/invite/lunarid
- **Instagram**: https://www.instagram.com/lunar_idn/
