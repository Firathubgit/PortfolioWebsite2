import React from "react";
import "./ProjectsProjectPage.css";
import project1Image from "./Wacky4.png";
import project2Image from "./BrainrotVideoGenerator.png";
import project3Image from "./BmwShopify.png";
import Project4Image from "./DigDig1.png";

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

      
      <div className="projets-item">
        <div className="project-image">
          <img src={Project4Image} alt="Project preview" />
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">Exhuarire</h3>
          <p className="project-stack">Unity | C# | Trello | PlasticSCM</p>
          <p className="project-description">
          Exhuarire is a 2D sidescroller where players ascend from an eerie sewer to the surface, overcoming obstacles in atmospheric, dynamic environments through an immersive explore intended gamedesign. Lead contributer of the team i was a Project leader in that includes 4 programmers, 4 designers and total of 1 year of development.
          </p>
          <a className="LearnMoreButton">
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
          <h3 className="project-title">Gates Of Hell</h3>
          <p className="project-stack">Unity | C# | Figma</p>
          <p className="project-description">
            2.5D Game that includes multiple arena maps, multiple playable charakters, cross input support, highschool thesis project with over 1 year off devolepment.
          </p>
          <a className="LearnMoreButton">
                    <span>Learn more</span>
                  </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsProjectPage;
