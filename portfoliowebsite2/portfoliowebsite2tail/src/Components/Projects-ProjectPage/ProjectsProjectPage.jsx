import React from "react";
import "./ProjectsProjectPage.css";
import project1Image from "./Wacky4.png";
import brainrotImage from "./BrainrotVideoGeneratorWebsite.png";
import project3Image from "./BmwShopify.png";
import Project4Image from "./DigDig1.png";
import Project5Image from "./GatesOfHell1.png";
import carwashImage from "./CarwashAppPolestar.png";

const ProjectsProjectPage = () => {
  return (
    <section className="projets-section">
      <h2 className="projects-section-title">Some of my work</h2>

      <div className="projets-item">
        <div className="project-image">
          <img src={project1Image} alt="Project preview" />
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">Wacky warriors</h3>
          <p className="project-stack">Unity | C# | Figma</p>
          <a href="/projects/wacky-warriors" className="LearnMoreButton">
            <span>Learn more</span>
          </a>
        </div>
      </div>

      <div className="projets-item">
        <div className="project-image">
          <img src={brainrotImage} alt="Project preview" />
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">Brainrot Video Generator</h3>
          <p className="project-stack">Python | ElevenLabs | MoviePy | Whisper | HTML</p>
          <a href="/projects/brainrot-generator" className="LearnMoreButton">
            <span>Learn more</span>
          </a>
        </div>
      </div>

      <div className="projets-item">
        <div className="project-image">
          <img src={project3Image} alt="Project preview" />
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">Custom Steering Wheel Shop</h3>
          <p className="project-stack">React | Tailwind CSS | Node.js | Figma</p>
          <a href="/projects/steering-wheel-shop" className="LearnMoreButton">
            <span>Learn more</span>
          </a>
        </div>
      </div>

      <div className="projets-item">
        <div className="project-image">
          <img src={Project4Image} alt="Project preview" />
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">Exhuarire</h3>
          <p className="project-stack">Unity | C# | Trello | PlasticSCM</p>
          <a href="/projects/exhuarire" className="LearnMoreButton">
            <span>Learn more</span>
          </a>
        </div>
      </div>

      <div className="projets-item">
        <div className="project-image">
          <img src={Project5Image} alt="Project preview" />
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">Gates Of Hell</h3>
          <p className="project-stack">Unity | C# | Figma</p>
          <a href="/projects/gates-of-hell" className="LearnMoreButton">
            <span>Learn more</span>
          </a>
        </div>
      </div>

      <div className="projets-item">
        <div className="project-image">
          <img src={carwashImage} alt="Project preview" />
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">Car Wash Tracker</h3>
          <p className="project-stack">React | TypeScript | Next.js | Tailwind CSS</p>
          <a href="/projects/car-wash-tracker" className="LearnMoreButton">
            <span>Learn more</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsProjectPage;
