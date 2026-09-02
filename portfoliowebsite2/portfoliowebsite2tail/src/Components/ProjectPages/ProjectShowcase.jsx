/* eslint-disable react/prop-types */
import './ProjectPages.css';
import volturianoLogo from './VolturianoLogo.png';

const ProjectShowcase = ({
  title,
  description,
  image,
  imageAlt = title,
  liveUrl,
  imageFit = 'cover',
}) => {
  return (
    <main className="project-case-study">
      <section className="project-case-study-hero">
        <img
          src={image}
          alt={imageAlt}
          className={`project-case-study-image project-case-study-image--${imageFit}`}
        />
        <div className="project-case-study-gradient" aria-hidden="true" />

        <div className="project-case-study-bottom">
          <div className="project-case-study-left">
            <img
              src={volturianoLogo}
              alt="Volturiano"
              className="project-case-study-brand"
            />
            <h1 className="project-case-study-title">{title}</h1>
            {liveUrl && (
              <div className="project-case-study-buttons">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-case-study-preview"
                >
                  Preview
                </a>
              </div>
            )}
          </div>

          <div className="project-case-study-right">
            <p className="project-case-study-description">{description}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectShowcase;
