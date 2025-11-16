# TvStream

TvStream is a modern streaming web application built on a MERN-oriented stack, with Vite providing a fast and efficient development and build environment.

## Problem It Solves

Traditional TV and streaming UIs often provide fragmented discovery, limited personalization, and inconsistent performance across devices.  
TvStream addresses this by offering a unified, responsive web experience focused on:

- **Centralized streaming discovery**: Aggregate and browse content from multiple sources in a single interface.
- **Improved engagement**: Modern UX that encourages longer session times and repeat visits.
- **Operational efficiency**: Web-based client that is easy to deploy, iterate on, and integrate with existing backends.

## Business Value / Benefits

- **Faster time-to-market**: MERN-style architecture and Vite-based tooling reduce development and iteration cycles.
- **Scalability**: React front end and Node/Mongo-backed APIs (when integrated) can scale with user growth.
- **Cost-effective**: Open-source stack minimizes licensing costs and infrastructure overhead.
- **Extensibility**: Easily extend with premium features (subscriptions, targeted ads, recommendations) to create new revenue streams.

## Tech Stack

- **Frontend Framework**: React (functional components and modern hooks)
- **Build Tool / Dev Server**: Vite (high-performance HMR and optimized production builds)
- **Language**: JavaScript / TypeScript
- **Styling**: CSS / SCSS (and optional UI libraries)
- **Backend (MERN)**: Node.js + Express (for RESTful APIs and server-side logic)
- **Database (MERN)**: MongoDB (for application and content data)
- **Code Quality**: ESLint (linting and basic static analysis)

## Core Features

- **Responsive UI**: Optimized layout for desktop and mobile browsers.
- **Content catalog**: Browse and search a catalog of shows or channels (static or API-driven).
- **Modern navigation**: Clean routing and state management for smooth user flows.
- **Extensible modules**: Architecture designed to plug in authentication, user profiles, and recommendations later.

## API Design (Planned)

The front end is designed to integrate with a Node.js/Express API. A typical API surface could include:

- `GET /api/content` – List available shows/channels.
- `GET /api/content/:id` – Get details for a specific item.
- `GET /api/user/profile` – Retrieve current user profile and preferences.
- `POST /api/user/favorites` – Manage user favorites/watchlist.

> Note: These endpoints are indicative and should be aligned with the actual backend implementation.

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

- **`src/`**: Core React application (components, pages, hooks, utilities)
- **`public/`**: Static assets served as-is
- **`index.html`**: Vite HTML entry point

An Express/MongoDB backend can be integrated to provide the full MERN stack experience for TvStream.

## Deployment

- **Development**: Run `npm run dev` for local development with hot module replacement.
- **Production build**: Run `npm run build` to generate an optimized static bundle in `dist/`.
- **Static hosting**: Serve the `dist/` directory via any static host (e.g., Nginx, Netlify, Vercel, static S3/CloudFront).
- **Full-stack deployment**: When coupled with an Express/MongoDB backend, deploy the API and serve the built front end behind a reverse proxy or platform-as-a-service of your choice.
