import React from "react";
import "./projects.css";
import project1Image from "./Wacky4.png";
import project2Image from "./BrainrotVideoGenerator.png";
import project3Image from "./BmwShopify.png";

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
          <a className="LearnMoreButton">
                    <span>Learn more</span>
                  </a>
        </div>
      </div>

      <div className="projets-item">
        <div className="project-image">
          <img src={project2Image} alt="Project preview" />
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">Brainrot Video Generator</h3>
          <p className="project-stack">Python | ElevenLabs | MoviePy | Whisper | HTML</p>
          <p className="project-description">
          AI-powered Flask app that creates Brainrot TikTok videos by combining ChatGPT, ElevenLabs, Whisper, and MoviePy for Amazing output of scripting, voiceovers, transcription, and video creation all into one video
          </p>
          <a className="LearnMoreButton">
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
          <p className="project-stack">React | Tailwind CSS | Node.js | Figma </p>
          <p className="project-description">
          A React-based e-commerce platform offering customizable luxury steering wheels. Features material options and immersive camera animations powered by Unity 3D, seamlessly integrated into the website. Designed for automotive enthusiasts with a focus on high-end UI and user experience.








          </p>
          <a className="LearnMoreButton">
                    <span>Learn more</span>
                  </a>
        </div>
      </div>

<a href="/projects.html" className="more-projects-button">More...</a>
    </section>
  );
};

export default Projects;
