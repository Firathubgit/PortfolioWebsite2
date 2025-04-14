import React from 'react';
import ImageCarousel from './ImageCarousel';
import digdig1 from '../Projects-ProjectPage/DigDig1.png';
import digdig2 from '../Projects-ProjectPage/DigDig1Bild2.png';
import digdig3 from '../Projects-ProjectPage/DigDig1Bild3.png';
import digdig4 from '../Projects-ProjectPage/DigDig1Bild4.png';
import digdig5 from '../Projects-ProjectPage/DigDig1Bild5.png';
import './ProjectPages.css';

const Exhuarire = () => {
  const images = [
    digdig1,
    digdig2,
    digdig3,
    digdig4,
    digdig5
  ];

  return (
    <div className="project-page-container">
      <h1 className="project-page-title">Exhuarire</h1>
      
      <div className="project-page-hero">
        <ImageCarousel images={images} />
      </div>

      <div className="project-page-content">
        <section className="project-section">
          <h2>Overview</h2>
          <p className="project-stack">Unity | C# | Trello | PlasticSCM</p>
          <p>
            Exhuarire is a 2D sidescroller where players ascend from an eerie sewer to the surface, overcoming 
            obstacles in atmospheric, dynamic environments through an immersive explore intended gamedesign. Lead 
            contributer of the team i was a Project leader in that includes 4 programmers, 4 designers and total 
            of 1 year of development.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul>
            <li>Immersive 2D side-scrolling gameplay</li>
            <li>Dynamic environmental storytelling</li>
            <li>Progressive difficulty scaling</li>
            <li>Atmospheric sound design</li>
            <li>Unique art style and animations</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Technology Stack</h2>
          <ul>
            <li>Unity - Game engine</li>
            <li>C# - Programming language</li>
            <li>Trello - Project management</li>
            <li>PlasticSCM - Version control</li>
            <li>Adobe Suite - Art and animation</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Development Process</h2>
          <p>
            As the project leader, I coordinated a team of 4 programmers and 4 designers over a 
            one-year development cycle. The process involved regular team meetings, iterative 
            design reviews, and continuous integration of new features while maintaining the 
            game's core atmospheric experience.
          </p>
        </section>

        <section className="project-section">
          <h2>Team Management</h2>
          <p>
            The project showcased effective team leadership through:
            - Clear task delegation and milestone setting
            - Regular code reviews and quality assurance
            - Collaborative problem-solving sessions
            - Efficient resource allocation
            - Continuous integration and testing procedures
          </p>
        </section>
      </div>
    </div>
  );
};

export default Exhuarire; 