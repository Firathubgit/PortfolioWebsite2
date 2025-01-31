import React from "react";
import "./projects.css";
import project1Image from "./WackyWarrioirsMainMenu.png";

const Projects = () => {
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
          <p className="project-description">
            2.5D Game that includes multiple arena maps, multiple playable charakters, cross input support, highschool thesis project with over 1 year off devolepment.
          </p>
          <a href="#learn-more" className="learn-more">Learn more</a>
        </div>
      </div>

      <div className="projets-item">
        <div className="project-image">
          <img src="https://placekitten.com/900/450" alt="Project preview" />
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">Blä blä blä</h3>
          <p className="project-stack">Next.js | React | TypeScript | Sass</p>
          <p className="project-description">
            Website for a gaming server called zibbi, featuring frequent updates,
            fun events, and a great community.
          </p>
          <a href="#learn-more" className="learn-more">Learn more →</a>
        </div>
      </div>

      <div className="projets-item">
        <div className="project-image">
          <img src="https://placekitten.com/900/450" alt="Project preview" />
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">imshi Web</h3>
          <p className="project-stack">Next.js | React | TypeScript | Sass</p>
          <p className="project-description">
            Website for a gaming server called dez, featuring frequent updates,
            fun events, and a great community.
          </p>
          <a href="#learn-more" className="learn-more">Learn more →</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
