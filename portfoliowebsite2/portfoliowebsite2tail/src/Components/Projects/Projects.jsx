import React from "react";
import "./Projects.css";
import project1Image from "./Wacky4.png";
import project3Image from "./BmwShopify.png";

const Projects = () => {
  return (
    <section className="projets-section">
      <h2 className="projects-section-title">Some of my work</h2>

      <div className="projets-item">
        <div className="project-image">
          <img src="/Skärmbild 2026-04-19 192051.png" alt="Volturiano AI Website Builder" />
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">Volturiano — AI Website Builder</h3>
          <p className="project-stack">React | TypeScript | Supabase | OpenAI | Vercel | Tailwind CSS</p>
          <a href="/projects/volturiano" className="LearnMoreButton">
            <span>Learn more</span>
          </a>
        </div>
      </div>

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

      <a href="/projects.html" className="more-projects-button">More...</a>
    </section>
  );
};

export default Projects;
