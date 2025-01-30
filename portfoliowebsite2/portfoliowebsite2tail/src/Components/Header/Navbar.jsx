import "./navbar.css"
import resumePDF from "./ProgrammeringCV.pdf"; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <span className="logo">Firat Kaya</span>
        
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">My Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>

        <a href={resumePDF} className="resume-btn" download="FiratKaya_Resume">Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;