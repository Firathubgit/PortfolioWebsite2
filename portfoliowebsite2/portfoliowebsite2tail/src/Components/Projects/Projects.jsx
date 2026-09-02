import "./Projects.css";
import project1Image from "./Wacky4.png";
import exhuarireImage from "../Projects-ProjectPage/DigDig1.png";

const Projects = () => {
  return (
    <section className="projets-section home-projects">
      <h2 className="projects-section-title">Some of my work</h2>

      <div className="projets-item">
        <div className="project-image">
          <img src={project1Image} alt="Wacky Warriors" />
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">Wacky Warriors</h3>
          <p className="project-stack">Unity | C# | Figma</p>
          <a href="/projects/wacky-warriors" className="LearnMoreButton">
            <span>Learn more</span>
          </a>
        </div>
      </div>

      <div className="projets-item">
        <div className="project-image">
          <img src="/volturiano-thumbnail.png" alt="Volturiano Vector Search Agent" />
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">Volturiano Vector Search Agent</h3>
          <p className="project-stack">React | TypeScript | Supabase | OpenRouter | Vercel | Tailwind CSS</p>
          <a href="/projects/volturiano" className="LearnMoreButton">
            <span>Learn more</span>
          </a>
        </div>
      </div>

      <div className="projets-item">
        <div className="project-image">
          <img src={exhuarireImage} alt="Exhuarire" />
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

      <a href="/projects.html" className="more-projects-button">More...</a>
    </section>
  );
};

export default Projects;
