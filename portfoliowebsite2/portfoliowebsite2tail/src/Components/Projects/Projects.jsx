import "./Projects.css";
import project1Image from "./Wacky4.png";

const Projects = () => {
  return (
    <section className="projets-section home-projects">
      <h2 className="projects-section-title">Some of my work</h2>

      <div className="projets-item">
        <div className="project-image">
          <img src="/android-car-infotainment-card.png" alt="Andriod Car Infotainment" />
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">Andriod Car Infotainment</h3>
          <p className="project-stack">Andriod Automotive | Linux | Kotlin | Rust</p>
          <a href="/projects/android-car-infotainment" className="LearnMoreButton">
            <span>Learn more</span>
          </a>
        </div>
      </div>

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
          <img src="/volturiano-thumbnail.png" alt="Volturiano Agent" />
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
        </div>

        <div className="project-content">
          <h3 className="project-title">Volturiano Agent</h3>
          <p className="project-stack">React | OpenRouter | TypeScript | Supabase</p>
          <a href="/projects/volturiano" className="LearnMoreButton">
            <span>Learn more</span>
          </a>
        </div>
      </div>

      <a href="/projects.html" className="more-projects-button">More...</a>
    </section>
  );
};

export default Projects;
