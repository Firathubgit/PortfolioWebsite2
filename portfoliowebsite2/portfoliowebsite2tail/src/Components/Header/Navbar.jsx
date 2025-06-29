import React, { useState } from "react";
import "./Navbar.css";
import resumePNG from "../../ResumeFiratKaya.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="/index.html" className="logo">Firat Kaya</a>

        {/* Menu Icon - Always stays in place */}
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>

        {/* Navbar Links */}
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="/about.html">About</a>
          <a href="/MyWork.html">My Work</a>
          <a href="/projects.html">Projects</a>
          <a href="/contact.html">Contact Me</a>
          <a href={resumePNG} className="resume-btn" download="ResumeFiratKaya.png">Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
