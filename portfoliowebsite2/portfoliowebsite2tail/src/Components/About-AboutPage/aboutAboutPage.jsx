import "./aboutAboutPage.css";

const skills = {
  Languages: ["C#", "Python", "C++", "JavaScript", "TypeScript", "HTML,CSS", ],
  GameEngines: ["Unity", "Godot", "Unreal Engine"],
  Frameworks: ["ReactJS", "NextJS", "ExpressJS", "Flask", "Shopify"],
  Tools: ["Git", "Figma", "Trello", "Plastic SCM"],
  Backend: ["Node.js", ".NET", "REST APIs"],
  Databases: ["SQL"],
  Practices: ["Agile","Scrum",]
};

const About = () => {
  return (
    <section className="About-section">
      <div className="about-container">
        <h1>About me</h1>
        <p>
          My name is Firat Kaya, and I am a passionate software developer currently
          studying Computer Engineering at <strong>Högskolan Väst</strong>. I have been programming
          for over four years, specializing in game development, <strong>full-stack</strong> web
          development, and all sorts of applications.
        </p>
        <p>
          My expertise includes C#, Python, JavaScript, C++, and various other
          programming languages and frameworks. I have worked on multiple
          projects, including game development in Unity, AI-driven tools, and
          full-stack applications. Additionally, I have experience in embedded
          systems and assembly programming.
        </p>
        <p>
          I am always eager to learn and explore new technologies while striving to
          create high-quality, optimized software solutions. I also enjoy working
          on game projects, experimenting with AI, and pushing the limits of
          interactive experiences..
        </p>
      </div>
      
      <div className="skills-section">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3>{category}</h3>
            <div className="skill-group">
              {skillList.map((skill) => (
                <span key={skill} className={`bubble ${category.toLowerCase()}`}>
                  <span className="text">{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;