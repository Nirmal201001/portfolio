<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🚀 Nirmal Kushwah | Full-Stack Developer Portfolio

A premium, interactive personal portfolio website showcasing the software engineering journey, projects, skills, and certifications of **Nirmal Kushwah**, Software Engineer – Full Stack.

Developed using **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Motion (Framer Motion)** for fluid transitions, micro-animations, and a highly responsive user experience.

---

## 🎨 Design & Aesthetic Highlights

* **Sleek Dark Mode:** A curated dark aesthetic with zinc borders and modern HSL colors that look professional and visually rich.
* **Glassmorphism & Gradients:** Subtle backdrops, responsive grid accents, and radial glowing background highlights.
* **Micro-Animations:** Fluid scroll-reveals, hover-state scalings, dynamic ping indicators, and interactive cards built with **Motion**.
* **Modern Typography:** Styled with professional fonts, clear hierarchy, and customizable layout themes.
* **Responsive Layout:** Pixel-perfect adaptability spanning ultra-wide desktop monitors down to mobile viewports.

---

## 🛠️ Tech Stack

This codebase leverages a state-of-the-art frontend stack:

* **Framework:** [Next.js 15](https://nextjs.org/) (utilizing the App Router for optimal routing, SSR, and SEO-friendly structures)
* **Library:** [React 19](https://react.dev/) (utilizing clean functional components, state hooks, and performance-tuned rendering)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS-in-JS, CSS variable configurations, custom theme definitions, utility-first styling)
* **Motion:** [Motion (Framer Motion)](https://motion.dev/) (`motion/react` for buttery-smooth animations and transitions)
* **Icons:** [Lucide React](https://lucide.dev/) & [@icons-pack/react-simple-icons](https://github.com/icons-pack/react-simple-icons)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (fully type-safe interfaces, lists, and props structures)

---

## 📂 Project Structure

Below is an overview of the code architecture to help navigate the repository:

```
├── .env.example              # Template for environment variables (AI Studio / Local run)
├── eslint.config.mjs         # ESLint layout configuration
├── next.config.ts            # Next.js configurations
├── package.json              # App dependencies & scripts
├── postcss.config.mjs        # PostCSS setup for Tailwind CSS v4
├── tsconfig.json             # TypeScript compiler rules
│
├── app/                      # Next.js App Router root
│   ├── favicon.ico           # Website favicon
│   ├── globals.css           # Tailwind v4 import & custom scrollbar base layer
│   ├── layout.tsx            # Global HTML shell and metadata configurations
│   └── page.tsx              # Main entry page containing single-page components
│
├── assets/images/            # High-resolution screenshots and portfolio visuals
│   ├── focus-power.png       # Focus Power project banner image
│   └── portfolio-logo.png    # Brand branding logo
│
├── components/               # Modular UI Components
│   ├── Navbar.tsx            # Floating sticky navigation bar with active state tracking
│   ├── Hero.tsx              # Splash header containing bio summary, tech badges, and download resume
│   ├── About.tsx             # Professional overview, engineering philosophy, and future goals
│   ├── Experience.tsx        # Timeline of professional experience (Citrusbug Technolabs)
│   ├── Projects.tsx          # Filtering project catalog showing project details and link integrations
│   ├── Skills.tsx            # Categorized tech badges with grid layouts and hover animations
│   ├── Certifications.tsx    # List of verified credentials (AWS badges, NoSQL certificates)
│   ├── Footer.tsx            # Section footer containing social networks and quick-links
│   └── icons/
│       └── SkillIcon.tsx     # Helper component to map icon names to Simple Icons SVGs
│
└── lib/                      # Business Logic & Shared Data
    ├── data.ts               # Hardcoded portfolio content objects (experience, projects, skills, education)
    └── utils.ts              # Global helper functions (e.g., classname merging with cn)
```

---

## 💼 Portfolio Content Overview

The portfolio showcases the professional career and technical accomplishments of **Nirmal Kushwah**:

1. **Professional Summary:** A full-stack engineer with 2+ years of experience delivering enterprise applications at *Citrusbug Technolabs*, specializing in building robust backends (Node.js, FastAPI), responsive frontends (React/Next), and secure database configurations.
2. **Projects Showcased:**
   - **Focus Power:** Strategic leadership dashboard constructed with React, Django, PostgreSQL, and AWS.
   - **ValeneHealth:** A comprehensive digital health app using Next.js, FastAPI, Azure, and AI transcriptions.
   - **Plutopal:** A live-streaming and commerce application built with React, Node.js, MongoDB, AWS Cognito, and GetStream.io.
   - **Astra:** A canvas-based image editor and asset management platform using Konva.js, Node.js, and AWS S3.
3. **Core Competencies:** Detail-oriented layout representing Frontend, Backend, Databases, Cloud & DevOps, and Tools.
4. **Academics & Badges:**
   - BTech in Computer Science from *Ganpat University* (GPA 8.01).
   - AWS Certified Cloud Foundations & Machine Learning Foundations badges.

---

## 🚀 Getting Started

### 📋 Prerequisites

To run this project locally, ensure you have **Node.js** (v18.x or higher recommended) and **npm** installed on your system.

### ⚙️ Environment Configuration

1. Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```
2. Populate the required environment variables:
   ```env
   GEMINI_API_KEY="your_gemini_api_key"
   APP_URL="http://localhost:3000"
   ```

### 💻 Local Run Commands

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run in development mode:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

3. **Build the production bundle:**
   ```bash
   npm run build
   ```
4. **Start the production server:**
   ```bash
   npm run start
   ```
5. **Lint checks:**
   ```bash
   npm run lint
   ```
6. **Clean cache directories:**
   ```bash
   npm run clean
   ```

---

## ✉️ Connect with Nirmal

* **LinkedIn:** [Nirmal Kushwah](https://www.linkedin.com/in/nirmal-kushwah-9b65a0201/)
* **Email:** [nirmalkushwah2010@gmail.com](mailto:nirmalkushwah2010@gmail.com)
* **GitHub:** [@Nirmal201001](https://github.com/Nirmal201001)
