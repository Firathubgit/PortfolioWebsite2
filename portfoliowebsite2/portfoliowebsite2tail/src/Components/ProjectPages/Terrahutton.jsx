import React from 'react';
import './ProjectPages.css';
import terrahuttonLogo from '../../TerrahuttonLogotype_White-BOlboZwc.png';

const Terrahutton = () => {

  return (
    <div className="project-page-container">
      <h1 className="project-page-title">Fullstack Developer at Terrahutton</h1>
      
      <div className="project-page-hero">
        <img src={terrahuttonLogo} alt="Terrahutton Logo" style={{'maxWidth': '300px', 'margin': 'auto', 'display': 'block'}}/>
      </div>

      <div className="project-page-content">
        <section className="project-section">
          <h2>Overview</h2>
          <p className="project-stack">React | TypeScript | Node.js | SQL</p>
          <p>
            Developed and maintained web applications for Terrahutton. 
            Worked on both front-end and back-end systems to deliver high-quality software solutions.
          </p>
        </section>

        <section className="project-section">
          <h2>Responsibilities</h2>
          <ul>
            <li>Building new features with React and TypeScript.</li>
            <li>Developing and managing server-side logic with Node.js.</li>
            <li>Database design and management with SQL.</li>
            <li>Collaborating with the team to define project requirements.</li>
            <li>Ensuring application performance and scalability.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Terrahutton; 