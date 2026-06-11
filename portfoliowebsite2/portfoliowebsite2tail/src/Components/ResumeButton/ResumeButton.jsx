import "./ResumeButton.css"
const resumePDF = "/FiratKayaEnglishProgrammeringsCV.pdf";
const Resumebutton = () => {
  return (
    <>
      <section className="projets-section">

        <a href={resumePDF} download="FiratKayaEnglishProgrammeringsCV.pdf" className="pill">
          <span>Ladda ned mitt CV</span>
        </a>


      </section>
    </>
  );
};

export default Resumebutton;