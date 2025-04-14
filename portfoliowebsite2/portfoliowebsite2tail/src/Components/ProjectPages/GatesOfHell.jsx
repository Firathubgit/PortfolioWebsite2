import React from 'react';
import ImageCarousel from './ImageCarousel';
import gatesOfHell1 from '../Projects-ProjectPage/GatesOfHell1.png';
import './ProjectPages.css';

const GatesOfHell = () => {
  const images = [gatesOfHell1];

  return (
    <div className="project-page-container">
      <h1 className="project-page-title">Gates of Hell</h1>
      
      <div className="project-page-hero">
        <ImageCarousel images={images} />
      </div>

      <div className="project-page-content">
        <section className="project-section">
          <h2>Overview</h2>
          <p className="project-stack">Unity | C# | Figma</p>
          <p>
            2.5D Game that includes multiple arena maps, multiple playable charakters, cross input support, 
            highschool thesis project with over 1 year off devolepment.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul>
            <li>Atmospheric dark fantasy environments</li>
            <li>Unique hand-drawn art style</li>
            <li>Challenging platform mechanics</li>
            <li>Dynamic combat system</li>
            <li>Environmental storytelling</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Technology Stack</h2>
          <ul>
            <li>Unity Game Engine</li>
            <li>C# Programming</li>
            <li>Custom 2D Animation System</li>
            <li>Pixel Art and Digital Illustration</li>
            <li>Unity's 2D Physics</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Development Process</h2>
          <p>
            The project focused on creating a haunting atmosphere through detailed artwork and 
            smooth gameplay mechanics. Special attention was given to the visual storytelling 
            elements and ensuring fluid character movement in the challenging platform sections.
          </p>
        </section>
      </div>
    </div>
  );
};

export default GatesOfHell; 