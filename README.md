# Murtuza's Portfolio - Technical Documentation

Welcome to the technical repository for **Murtuza.dev**, a high-performance, modern, agentic-design-inspired portfolio web application. This project is built using React, Vite, and Tailwind CSS to deliver a premium, highly interactive user experience.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Configured for static hosting (e.g., GitHub Pages)
- **Containerization**: Docker-ready for consistent cross-environment builds

## ✨ Key Features & Architecture

### 1. Advanced UI/UX Elements
- **Dynamic Parallax Background**: Utilizes state-driven mouse positioning for an engaging depth effect.
- **Custom Liquid Cursor**: Replaces the default system cursor on desktop with an animated, context-aware liquid ring that responds to interactive elements.
- **Micro-Animations**: Extensive use of CSS animations, transitions, and hover effects (`animate-in`, `fade-in`, `zoom-in`, `slide-in` from Tailwind/custom CSS) to make the interface feel alive.
- **Glassmorphism**: Leverages backdrop-blur, semi-transparent backgrounds, and bordering for a sleek, modern, "agentic" look.

### 2. Component Structure
The primary application logic lives within `src/App.jsx`. It adopts a single-page architecture where content is divided into logical tabs to ensure fast navigation without page reloads.

- **Navigation System**: A sticky navigation bar that adapts based on scroll position (transparent to frosted glass) with a responsive mobile-dropdown menu.
- **Content Tabs**: State management handles dynamic rendering of different professional sections:
  - Contact & Bio
  - Education & Certifications
  - Experience
  - Capabilities (Skills, Services, Industries)
  - Specialized Domains (AI Solutions, Cyber Security, AI Security)

### 3. Data Management
All portfolio-specific data is decoupled from the main UI component and managed within `src/data.jsx`. This architectural decision simplifies content updates (such as adding a new role, skill, or certification) without modifying the main component structure.

## 🛠️ Local Development & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

### Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

### Build & Deploy

- **Production Build:**
  ```bash
  npm run build
  ```
  This creates an optimized static build in the `dist` directory. The Vite configuration is tailored for relative path setups (`base: './'`) to facilitate generic static hosting.

- **Preview Build locally:**
  ```bash
  npm run preview
  ```

## 🏗️ Docker Context (Reference)

This repository (`portfolio-docker`) is optimized to be containerized. When bringing up a production Docker container, ensure the container handles serving the `dist` directory via a lightweight web server (like Nginx) for optimal performance.

## 🔒 Security Best Practices Implemented
- Fast, secure static delivery with zero server-side vulnerabilities for the public interface.
- Environment-agnostic setup ensures no sensitive keys are hardcoded in the frontend.
- Specialized content focus highlighting Cyber Security and AI Security capabilities.

---
*Precision Engineered Solutions — Established 2013*
