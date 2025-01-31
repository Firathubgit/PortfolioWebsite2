import "./Resumebutton.css"
import resumePDF from "./ProgrammeringCV.pdf"; 
const Resumebutton = () => {
  return (
    <>
      <section className="projets-section">

        <a href={resumePDF} download="FiratKaya_Resume" className="pill">
          <span>Ladda ned mitt CV</span>
        </a>


      </section>
    </>
  );
};

export default Resumebutton;