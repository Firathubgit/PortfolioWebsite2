import "./Footer.css"
import { useState } from 'react';

const Footer = () => {
  const [showCopied, setShowCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('Firat05_@hotmail.com');
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <span className="footer-title">Firat Kaya – Software Developer | 3D & Web Enthusiast</span>
          <div className="footer-links">
            <a href="https://github.com/Firathubgit" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="dot">•</span>
            <a href="https://linkedin.com/in/firat-kaya-baba45267" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="dot">•</span>
            <div className="email-container">
              <a href="#" onClick={handleEmailClick} className="email-link">Email</a>
              {showCopied && <span className="copied-popup">Copied!</span>}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="copyright">© 2025 Firat Kaya. All rights reserved.</span>
          <span className="built-with">Built with love, some icons by Icons8</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;