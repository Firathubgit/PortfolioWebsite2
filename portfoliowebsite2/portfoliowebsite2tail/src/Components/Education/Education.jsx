import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="Education-section">
      <h2 className="Education-section-title">Education</h2>
      
      <div className="timeline">
        {/* === Högskolan väst === */}
        <div className="timeline-item">
          {/* The round bullet */}
          <div className="timeline-icon"></div>
          {/* The content box */}
          <div className="timeline-content">
            <h3>Högskolan väst</h3>
            <h4>Datateknik ingeniör 180 HP | 2024 - 2027</h4>
            <p>
              Datateknikingenjör 180 HP (2024–2027) med fokus på modern 
              systemutveckling och programmering. Har lärt mig grundläggande 
              och avancerade principer inom mjukvarudesign, algoritmer och 
              databaser, samt praktisk erfarenhet av C++, Python och 
              molnbaserade lösningar. Strävar efter att skapa skalbara, säkra 
              och användarvänliga tekniska lösningar.
            </p>
          </div>
        </div>

        {/* === LBS Kreativa Gymnasiet === */}
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>LBS Kreativa Gymnasiet</h3>
            <h4>Teknik Programmet | augusti 2021 - juni 2024</h4>
            <p>
              Tog studenten 24–06–05. Programmering – utbildningen APP och 
              webbutveckling inom information och medieteknik inom 
              teknikprogrammet. Utbildningen fokuserar på den tekniska delen 
              i utvecklingsprocessen. Helt enkelt det som händer bakom 
              grafiken. Jag arbetar främst med programmering i både två- och 
              tredimensionella miljöer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
