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

      <h3 className="Certificates-section-title">Certificates</h3>

      <div className="timeline">
        {/* === Cisco CCNA 1 Certificate === */}
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>Cisco CCNA 1</h3>
            <h4>CCNA 1 Certificate | 2025</h4>
            <p>
              Completed the CCNA 1 certification in 2025, gaining foundational 
              knowledge in networking, including network fundamentals, IP 
              addressing, and basic router and switch configuration.
            </p>
          </div>
        </div>

        {/* === Linux Unhatched Certificate === */}
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>Linux Unhatched – Cisco Networking Academy</h3>
            <h4>Linux Unhatched Certificate | 2025</h4>
            <p>
              Completed Cisco's Linux Unhatched course covering core CLI and system operations.
            </p>
          </div>
        </div>

        {/* === Cisco CCNA 2 Certificate === */}
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h3>Cisco CCNA 2</h3>
            <h4>CCNA 2 Certificate | 2026</h4>
            <p>
              Completed the CCNA 2 certification in 2026, advancing my knowledge 
              in networking, including routing and switching essentials, 
              network security, and troubleshooting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
