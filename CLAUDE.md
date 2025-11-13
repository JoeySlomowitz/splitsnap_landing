# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Splitra Landing Page - A static Next.js website for the Splitra iOS bill-splitting application. The site showcases app features, explains functionality, and provides TestFlight download links.

## Key Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (includes OG image generation)
- `npm run start` - Start production server
- `npm run lint` - Lint codebase

### Build Process
The build process runs `npm run generate-og` before building, which:
1. Compiles `scripts/generate-og-image.ts` to JavaScript
2. Executes the script to generate `/og-image.png`

## Architecture

### Framework & Deployment
- **Next.js 15** with static export configuration (`output: "export"`)
- **Tailwind CSS 4** for styling
- **TypeScript** throughout
- Static files output to `dist/` directory

### Component Structure
- `src/app/` - Next.js app directory with pages and layout
- `src/components/` - Reusable React components (Hero, Features, Steps, Header, Footer)
- Components use client-side features (`'use client'`) for interactions

### Key Implementation Details
- Custom smooth scroll implementation in main page for anchor navigation
- Intersection Observer animations in components
- Responsive design with dark/light mode support
- SEO optimized with comprehensive metadata and Open Graph tags

### Static Assets
- `public/images/` - App screenshots and icons
- `public/og-image.png` - Generated dynamically via canvas script
- Uses `@napi-rs/canvas` for server-side image generation

### Path Aliases
- `@/*` resolves to `src/*` (configured in tsconfig.json)

## Content Structure

The landing page follows a standard structure:
1. **Hero** - Main headline and TestFlight CTA
2. **Features** - App capabilities showcase  
3. **Steps** - "How it works" walkthrough
4. **Download** - TestFlight download section

## Styling Conventions

- Tailwind CSS with custom animations (`animate-fadeIn`)
- Consistent dark mode support (`dark:` variants)
- Responsive breakpoints: `sm:`, `lg:`
- Color scheme: Black/white primary, blue accents for dark mode