import "./ResumeButton.css"

const resumePDF = "/FiratKayaProgrammeringsCV.pdf";

const Resumebutton = () => {
  return (
    <>
      <section className="projets-section">
        <a href={resumePDF} download="FiratKayaProgrammeringsCV.pdf" className="pill">
          <span>Ladda ned mitt CV</span>
        </a>
      </section>
    </>
  );
};

export default Resumebutton;
