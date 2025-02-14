import "./navbar.css"
import resumePDF from "./ProgrammeringCV.pdf"; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="/index.html" className="logo">Firat Kaya</a>
        
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="/MyWork">My Work</a>
          <a href="/projects.html">Projects</a>
          <a href="/contact.html">Contact Me</a>
        </div>

        <a href={resumePDF} className="resume-btn" download="FiratKaya_Resume">Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;