import React from 'react';
import ImageCarousel from './ImageCarousel';
import volturiano1 from '../Projects/VolturianoImg/Skärmbild 2025-12-16 002531.png';
import volturiano2 from '../Projects/VolturianoImg/Skärmbild 2025-12-16 003842.png';
import volturiano3 from '../Projects/VolturianoImg/Skärmbild 2025-12-16 002831.png';
import volturiano4 from '../Projects/VolturianoImg/Skärmbild 2025-12-16 002738.png';
import volturiano5 from '../Projects/VolturianoImg/Skärmbild 2025-12-16 002716.png';
import volturiano6 from '../Projects/VolturianoImg/Skärmbild 2025-12-16 002701.png';
import volturiano7 from '../Projects/VolturianoImg/Skärmbild 2025-12-16 002644.png';
import volturiano8 from '../Projects/VolturianoImg/Skärmbild 2025-12-16 002622.png';
import volturiano9 from '../Projects/VolturianoImg/Skärmbild 2025-12-16 002548.png';
import volturiano10 from '../Projects/VolturianoImg/Skärmbild 2025-12-16 002453.png';
import volturiano11 from '../Projects/VolturianoImg/Skärmbild 2025-12-16 002431.png';
import volturiano12 from '../Projects/VolturianoImg/Skärmbild 2025-12-16 002334.png';
import volturiano13 from '../Projects/VolturianoImg/Skärmbild 2025-11-17 181538.png';
import volturiano14 from '../Projects/VolturianoImg/Skärmbild 2025-11-17 135804.png';
import volturiano15 from '../Projects/VolturianoImg/Skärmbild 2025-11-16 145437.png';
import volturiano16 from '../Projects/VolturianoImg/Skärmbild 2025-11-16 091405.png';
import volturiano17 from '../Projects/VolturianoImg/Skärmbild 2025-11-16 091320.png';
import './ProjectPages.css';

const Volturiano = () => {
  const images = [
    volturiano1,
    volturiano2,
    volturiano3,
    volturiano4,
    volturiano5,
    volturiano6,
    volturiano7,
    volturiano8,
    volturiano9,
    volturiano10,
    volturiano11,
    volturiano12,
    volturiano13,
    volturiano14,
    volturiano15,
    volturiano16,
    volturiano17
  ];

  return (
    <div className="project-page-container">
      <h1 className="project-page-title">VOLTURIANO</h1>
      
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
          <p className="project-stack">React | Vite | TypeScript | Zustand | Framer Motion | Tailwind CSS | React Three Fiber | Three.js | Supabase</p>
          <p>
            VOLTURIANO is a production-ready full-stack luxury automotive platform featuring a manifest-driven 2D/3D configurator, 
            secure Supabase backend, advanced state management, and a scalable SaaS architecture. The platform combines modern web 
            development with 2D/3D configurators and a secure SaaS architecture for the premium and sports car industry. 
            <a href="https://volturiano.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'underline', marginLeft: '8px' }}>Visit volturiano.com</a>
          </p>
        </section>

        <section className="project-section">
          <h2>Vision & Purpose</h2>
          <p>
            VOLTURIANO is designed as a scalable digital platform rather than a demo, with focus on architecture, state management, 
            security, performance, and UX – the same principles used in real automotive and enterprise systems. The platform enables users to:
          </p>
          <ul>
            <li>Configure vehicles in 2D and 3D</li>
            <li>Save and version their configurations in a personal garage</li>
            <li>Export specifications (PDF)</li>
            <li>Interact with a future AI-assisted recommendation system</li>
            <li>Administrate via a role-based admin panel system</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul>
            <li><strong>2D Configurator:</strong> Manifest-driven architecture with layer-based rendering (color, wheels, interior, details) and compatibility rules between selections</li>
            <li><strong>3D Configurator:</strong> Optimized GLB model with HDRI studio lighting, real-time material and color changes, camera controls & presentation modes</li>
            <li><strong>Secure Backend:</strong> Supabase with Row Level Security (RLS), role-based access control (RBAC), and PostgreSQL with JSONB-driven data</li>
            <li><strong>State Management:</strong> Zustand for global state management of configurations, user data, and sessions</li>
            <li><strong>Premium UX:</strong> Framer Motion animations, Tailwind CSS for scalable design, and optimized performance</li>
            <li><strong>Admin Platform:</strong> Full CRUD for vehicles, options, configurator manifests, users, and RBAC-controlled views</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Technical Architecture</h2>
          <h3>Frontend</h3>
          <ul>
            <li>React + Vite</li>
            <li>TypeScript</li>
            <li>Zustand – global state management</li>
            <li>Framer Motion – premium animations & transitions</li>
            <li>Tailwind CSS – scalable design system</li>
            <li>React Three Fiber (R3F) – 3D rendering in browser</li>
            <li>Three.js / GLB pipeline – optimized PBR rendering</li>
          </ul>
          
          <h3>Backend</h3>
          <ul>
            <li>Supabase Authentication (email, roles)</li>
            <li>PostgreSQL (JSONB-driven data)</li>
            <li>Row Level Security (RLS)</li>
            <li>Storage buckets (images, renders, documents)</li>
            <li>Realtime subscriptions</li>
            <li>Edge Functions</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Data Model & Security</h2>
          <p>
            The platform includes core entities: Users, Vehicles, Configuration Manifests, Saved Builds (Garage), Options & Compatibility Rules, 
            and Roles (RBAC). Security is implemented through Row Level Security (RLS) per user, role-based access control with four levels 
            (user, support_admin, content_admin, super_admin), CSP & environment-based secrets handling, and no sensitive logic in the frontend.
          </p>
        </section>

        <section className="project-section">
          <h2>Why This Project Matters</h2>
          <p>
            VOLTURIANO demonstrates system design at product level, advanced state management, real authentication & security, 
            2D + 3D rendering in production, scalable SaaS architecture, and UX focus for the premium segment. It's not a "toy project" 
            – but an engineer-driven platform case study.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Volturiano;

