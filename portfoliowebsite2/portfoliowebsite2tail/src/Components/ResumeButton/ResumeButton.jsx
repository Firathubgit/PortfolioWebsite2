import "./ResumeButton.css"
import resumePNG from "../../ResumeFiratKaya.png"; 
const Resumebutton = () => {
  return (
    <>
      <section className="projets-section">

        <a href={resumePNG} download="ResumeFiratKaya.png" className="pill">
          <span>Ladda ned mitt CV</span>
        </a>


      </section>
    </>
  );
};

export default Resumebutton;