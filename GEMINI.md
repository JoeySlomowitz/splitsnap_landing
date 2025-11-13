# GEMINI.md

## Project Overview

This is a landing page for Splitra, a bill-splitting iOS application. The landing page is built with Next.js and React, and is designed to be a static website. It showcases the app's features, explains how it works, and provides a link to download the app via TestFlight. The styling is done using Tailwind CSS.

## Building and Running

The following commands are available to build and run the project:

*   `npm run dev`: Starts the development server with Turbopack.
*   `npm run build`: Builds the application for production. This also generates an Open Graph image.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Lints the codebase.

## Development Conventions

*   The project uses TypeScript.
*   Styling is done with Tailwind CSS.
*   Components are located in `src/components`.
*   The main page is `src/app/page.tsx`.
*   The project uses static export, as indicated by the `output: "export"` in `next.config.ts`.
