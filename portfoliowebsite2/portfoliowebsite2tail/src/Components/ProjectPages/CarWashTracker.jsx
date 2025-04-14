import React from 'react';
import ImageCarousel from './ImageCarousel';
import carWashBmw from '../Projects-ProjectPage/CarWashAppBmw.png';
import carWashMercedes from '../Projects-ProjectPage/Carwashappmercedes.png';
import carWashPolestar from '../Projects-ProjectPage/CarwashAppPolestar.png';
import carWashPolestarExample from '../Projects-ProjectPage/CarWashAppPolestarExxample.png';
import carWashTesla from '../Projects-ProjectPage/CarWashAppTesla.png';
import carWashPolestarSUII from '../Projects-ProjectPage/CarWashExamplePolestarSUII.png';
import './ProjectPages.css';

const CarWashTracker = () => {
  const images = [
    carWashPolestar,
    carWashBmw,
    carWashMercedes,
    carWashTesla,
    carWashPolestarExample,
    carWashPolestarSUII
  ];

  return (
    <div className="project-page-container">
      <h1 className="project-page-title">Car Wash Tracker</h1>
      
      <div className="project-page-hero">
        <ImageCarousel images={images} />
      </div>

      <div className="project-page-content">
        <section className="project-section">
          <h2>Overview</h2>
          <p className="project-stack">React | TypeScript | Next.js | Tailwind CSS</p>
          <p>
            A modern web application for tracking car wash history and maintenance. Features a sleek UI with 
            car profiles, wash entry logging, and image upload capabilities. Built with performance and user 
            experience in mind using the latest web technologies.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul>
            <li>Detailed car profile management</li>
            <li>Wash history tracking with image uploads</li>
            <li>Maintenance schedule reminders</li>
            <li>Interactive dashboard with statistics</li>
            <li>Responsive design for mobile and desktop</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Technology Stack</h2>
          <ul>
            <li>React - Frontend library</li>
            <li>TypeScript - Type-safe development</li>
            <li>Next.js - React framework</li>
            <li>Tailwind CSS - Styling</li>
            <li>Vercel - Deployment and hosting</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Development Process</h2>
          <p>
            The application was developed with a focus on creating an intuitive and efficient 
            user experience. Special attention was given to performance optimization, data 
            persistence, and creating a clean, modern interface that works seamlessly across 
            all devices.
          </p>
        </section>

        <section className="project-section">
          <h2>Future Enhancements</h2>
          <p>
            Planned features include:
            - Integration with service center APIs
            - Expense tracking and analytics
            - Social sharing capabilities
            - Advanced notification system
            - Custom maintenance schedules
          </p>
        </section>
      </div>
    </div>
  );
};

export default CarWashTracker; 