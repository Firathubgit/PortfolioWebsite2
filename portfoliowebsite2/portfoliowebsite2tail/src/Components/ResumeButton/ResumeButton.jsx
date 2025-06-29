import "./ResumeButton.css"
import resumePNG from "../../../FiratKayaCV.png"; 
const Resumebutton = () => {
  return (
    <>
      <section className="projets-section">

        <a href={resumePNG} download="FiratKaya_CV.png" className="pill">
          <span>Ladda ned mitt CV</span>
        </a>


      </section>
    </>
  );
};

export default Resumebutton;