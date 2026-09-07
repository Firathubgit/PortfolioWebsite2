/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from 'react';
import './ProjectPages.css';
import volturianoLogo from './VolturianoLogo.png';

const ProjectShowcase = ({
  title,
  description,
  image,
  images,
  imageAlt = title,
  liveUrl,
  sourceUrl,
  showBrand = true,
  imageFit = 'cover',
}) => {
  const slides = useMemo(
    () => (images?.length ? images : image ? [image] : []),
    [image, images],
  );
  const [{ currentIndex, previousIndex }, setSlideState] = useState({
    currentIndex: 0,
    previousIndex: null,
  });

  useEffect(() => {
    if (slides.length < 2) return undefined;

    let transitionTimeout;
    const interval = window.setInterval(() => {
      setSlideState((state) => ({
        currentIndex: (state.currentIndex + 1) % slides.length,
        previousIndex: state.currentIndex,
      }));

      window.clearTimeout(transitionTimeout);
      transitionTimeout = window.setTimeout(() => {
        setSlideState((state) => ({ ...state, previousIndex: null }));
      }, 1600);
    }, 6000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(transitionTimeout);
    };
  }, [slides.length]);

  useEffect(() => {
    if (slides.length < 2) return;
    const nextImage = new Image();
    nextImage.src = slides[(currentIndex + 1) % slides.length];
  }, [currentIndex, slides]);

  const currentImage = slides[currentIndex] || slides[0];

  return (
    <main className="project-case-study">
      <section className="project-case-study-hero">
        {previousIndex !== null && (
          <img
            src={slides[previousIndex]}
            alt=""
            aria-hidden="true"
            className={`project-case-study-image project-case-study-image--${imageFit} project-case-study-image--leaving`}
          />
        )}
        <img
          key={currentImage}
          src={currentImage}
          alt={imageAlt}
          className={`project-case-study-image project-case-study-image--${imageFit} project-case-study-image--entering`}
        />
        <div className="project-case-study-gradient" aria-hidden="true" />

        <div className="project-case-study-bottom">
          <div className="project-case-study-left">
            {showBrand && (
              <img
                src={volturianoLogo}
                alt="Volturiano"
                className="project-case-study-brand"
              />
            )}
            <h1 className="project-case-study-title">{title}</h1>
            {(liveUrl || sourceUrl) && (
              <div className="project-case-study-buttons">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-case-study-preview"
                  >
                    Preview
                  </a>
                )}
                {sourceUrl && (
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-case-study-preview"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="project-case-study-right">
            <p className="project-case-study-description">{description}</p>
          </div>
        </div>
      </section>

      <section className="project-case-study-mobile-description">
        <p className="project-case-study-description">{description}</p>
      </section>
    </main>
  );
};

export default ProjectShowcase;
