import "./contactMe.css";
import instagramicon from "./InstragramIcon.png";
import EmailLogo from "./emailicon.png";
import linkedinLogo from "./LinkedinLogo.png";

const Contact = () => {
  return (
    <section className="contact">
      <div className="rectangle">
        <div className="Textcontent">
          <h1>Contact me</h1>
          <p className="description">
            You can contact me via LinkedIn, Email, or Instagram. I will try to get back as soon as possible.
          </p>
          <div className="icons">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/firat-kaya-baba45267" target="_blank" rel="noopener noreferrer" className="icon-item">
              <img src={linkedinLogo} alt="LinkedIn" className="icon-image" />
              <span className="icon-title">LinkedIn</span>
              <p className="icon-description">Firat Kaya</p>
            </a>

            {/* Email (mailto: opens email client) */}
            <a href="mailto:Firat05_@hotmail.com" className="icon-item">
              <img src={EmailLogo} alt="Email" className="icon-image" />
              <span className="icon-title">Email</span>
              <p className="icon-description">Firat05_@hotmail.com</p>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/Atal_Moretti" target="_blank" rel="noopener noreferrer" className="icon-item">
              <img src={instagramicon} alt="Instagram" className="icon-image" />
              <span className="icon-title">Instagram</span>
              <p className="icon-description">@Atal_Moretti</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
