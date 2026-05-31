import React from 'react';
import ImageCarousel from './ImageCarousel';
import './ProjectPages.css';

const Volturiano = () => {
  const images = [
    '/Skärmbild 2026-04-19 192051.png',
    '/Skärmbild 2026-05-09 014059.png',
    '/Skärmbild 2026-05-22 015159.png',
    '/Skärmbild 2026-05-27 151826.png',
    '/Skärmbild 2026-05-03 025325.png',
    '/Skärmbild 2026-05-06 232858.png',
  ];

  return (
    <div className="project-page-container">
      <h1 className="project-page-title">VOLTURIANO — AI WEBSITE BUILDER</h1>
      
      <div className="project-page-hero">
        <ImageCarousel images={images} />
      </div>

      <div className="visit-live-site-container">
        <a 
          href="https://volturiano.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="visit-live-site-button"
        >
          <span>Visit Live Site</span>
          <span className="button-arrow">→</span>
        </a>
      </div>

      <div className="project-page-content">
        <section className="project-section">
          <h2>Overview</h2>
          <p className="project-stack">React | Vite | TypeScript | Tailwind CSS | Supabase | Vercel | OpenAI | Google Gemini</p>
          <p>
            VOLTURIANO is a production-grade AI-powered website builder that enables users to generate, customize, and deploy 
            premium websites through natural language prompts and a visual interface. The platform combines cutting-edge AI models 
            with a real-time code editor, live preview, component library, and one-click deployment to Vercel — making professional 
            web development accessible to everyone.
            <a href="https://volturiano.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'underline', marginLeft: '8px' }}>Visit volturiano.com</a>
          </p>
        </section>

        <section className="project-section">
          <h2>Vision & Purpose</h2>
          <p>
            VOLTURIANO was built to democratize premium web design. Instead of hiring developers or using rigid drag-and-drop 
            builders, users describe their vision in plain text — and the AI generates a fully functional, beautifully designed 
            website in seconds. The platform is designed as a scalable SaaS product with focus on:
          </p>
          <ul>
            <li>AI-driven website generation from text prompts and image references</li>
            <li>Real-time code editor with live preview (Code/Preview toggle)</li>
            <li>Curated component library with categorized UI sections (Hero, Header, Footer, Dashboard, Pricing, etc.)</li>
            <li>One-click export: Publish to Vercel or Download as ZIP</li>
            <li>User profiles with saved websites, components, billing, and settings</li>
            <li>Community-driven component marketplace with user submissions and feedback</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul>
            <li><strong>AI Website Generation:</strong> Users type a prompt (e.g. "Ask Volturiano to design a luxury real estate site...") and the AI generates a complete, styled website with React code</li>
            <li><strong>Live Code Editor:</strong> Full in-browser code editor with file tree navigation, syntax highlighting, and real-time preview — users can switch between Code and Preview modes</li>
            <li><strong>Component Library:</strong> 50+ premium UI components across categories (Hero, Background, Features, Header, Footer, Dashboard, Social, Pricing, etc.) — users can browse, select, and compose websites visually</li>
            <li><strong>One-Click Deployment:</strong> Export dropdown with "Publish to Vercel" for instant deployment or "Download ZIP" for local use</li>
            <li><strong>Template System:</strong> "Start with a Template" section offering pre-built premium website designs as starting points</li>
            <li><strong>User Profiles:</strong> Personal dashboards showing saved websites, submitted components, billing, profile settings, followers/following</li>
            <li><strong>Multi-Model AI:</strong> Supports multiple AI providers including Google Gemini and custom models for diverse generation capabilities</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Technical Architecture</h2>
          <h3>Frontend</h3>
          <ul>
            <li>React + Vite — fast build tooling and HMR</li>
            <li>TypeScript — type-safe codebase</li>
            <li>Tailwind CSS — utility-first styling system</li>
            <li>Monaco Editor / CodeMirror — in-browser code editing</li>
            <li>Sandpack / iframe preview — live website rendering</li>
            <li>Framer Motion — premium animations & transitions</li>
          </ul>
          
          <h3>Backend & Infrastructure</h3>
          <ul>
            <li>Supabase — authentication, PostgreSQL database, storage, and edge functions</li>
            <li>OpenAI & Google Gemini APIs — multi-model AI generation pipeline</li>
            <li>Vercel — hosting and one-click deployment target</li>
            <li>Row Level Security (RLS) — secure per-user data isolation</li>
            <li>Edge Functions — serverless API endpoints for AI generation and export</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Platform Ecosystem</h2>
          <p>
            VOLTURIANO goes beyond a simple website generator. It features a full ecosystem including a community component 
            marketplace where users can submit, share, and discover UI components. Each component has metadata (author, category, 
            variant), and users can like, save, and reuse components across projects. The platform also includes a credit-based 
            billing system, user profiles with followers, and granular settings management.
          </p>
        </section>

        <section className="project-section">
          <h2>Why This Project Matters</h2>
          <p>
            VOLTURIANO demonstrates fullstack product engineering at scale: AI integration with multiple LLM providers, 
            real-time code compilation and preview, a marketplace with user-generated content, secure multi-tenant SaaS 
            architecture, and premium UX design. It's not a wrapper around an API — it's a complete platform with authentication, 
            billing, deployment pipelines, and community features. This is a production-grade SaaS product built end-to-end.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Volturiano;
