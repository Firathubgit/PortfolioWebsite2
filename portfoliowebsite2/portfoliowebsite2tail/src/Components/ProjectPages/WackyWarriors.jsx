import React from 'react';
import ImageCarousel from './ImageCarousel';
import wackyWarriorsPlayerSelection from '../Projects-ProjectPage/WackywarrioirsPlayerSelectionImage.png';
import wackyWarriorsMapSelection from '../Projects-ProjectPage/WackyWarrioirsMapSelection.png';
import wackyWarriors1 from '../Projects-ProjectPage/WackyWarrioirs1.png';
import wackyWarriors2 from '../Projects-ProjectPage/WackyWarrioirs2.png';
import wackyWarriors3 from '../Projects-ProjectPage/WackyWarrioirs3.png';
import wackyWarriors4 from '../Projects-ProjectPage/WackyWarrioirs4.png';
import wackyWarriors5 from '../Projects-ProjectPage/WackyWarrioirs5.png';
import wackyWarriors6 from '../Projects-ProjectPage/WackyWarrioirs6.png';
import wacky4 from '../Projects-ProjectPage/Wacky4.png';
import './ProjectPages.css';

const WackyWarriors = () => {
  const images = [
    wacky4,
    wackyWarriors4,
    wackyWarriors1,
    wackyWarriors2,
    wackyWarriors3,
    wackyWarriorsPlayerSelection,
    wackyWarriorsMapSelection,
    wackyWarriors5,
    wackyWarriors6
  ];

  return (
    <div className="project-page-container">
      <h1 className="project-page-title">Wacky Warriors</h1>
      
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
            <li>Dynamic combat system with combo mechanics</li>
            <li>Custom character animations and movement</li>
            <li>Multiple game environments and battle arenas</li>
            <li>Real-time health and score tracking</li>
            <li>Local multiplayer support</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Technology Stack</h2>
          <ul>
            <li>Unity Game Engine</li>
            <li>C# Programming</li>
            <li>Mixamo for character animations</li>
            <li>Custom shader development</li>
            <li>Unity's Physics System</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Development Process</h2>
          <p>
            The development focused on creating engaging combat mechanics and smooth character controls. 
            Special attention was given to animation transitions, hit detection, and maintaining consistent 
            game performance. The project showcases implementation of game physics, character controllers, 
            and UI systems in Unity.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WackyWarriors; 