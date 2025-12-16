import React from "react";
import "./App.css";

/* 
   1) Import all the logos you want, 
      using the "top" version for duplicates.
      Adjust file names/paths if they're in subfolders. 
*/
import blenderLogo from "./blender.svg";
import bmwLogo from "./bmw.png";            // Taking bmw.png over bmw.svg
import cplusplusLogo from "./cplusplus.svg";
import cppLogo from "./cpp.svg";
import csharpLogo from "./csharp.svg";
import cssLogo from "./css.svg";
import figmaLogo from "./figma.svg";
import gitLogo from "./git.svg";
import githubLogo from "./github.svg";
import godotEngineLogo from "./godotengine.svg";
import htmlLogo from "./html.svg";
import javaLogo from "./java.svg";
import jsLogo from "./js.svg";
import openaiLogo from "./openai.svg";
import pythonLogo from "./python.svg";     // Taking python.svg over python (1).svg
import sassPng from "./sass.png";
import stripeLogo from "./stripe.jpeg";
import tailwindLogo from "./tailwind.svg";
import tsLogo from "./ts.svg";
import unityPng from "./unity.png";
import unitySvg from "./unity.svg";        // Different from unity.png, so including both
import vscodeLogo from "./vscode.svg";
import vuejsLogo from "./vuejs.svg";
import matlabLogo from "./MATLAB.png";
import mongodbLogo from "./MongoDB.png";
import mysqlLogo from "./MySQL.png";
import nextjsLogo from "./Next.js.png";
import nodejsLogo from "./Node.js.png";
import postgresqlLogo from "./PostgresSQL.png";
import reactLogo from "./React.png";
import threejsLogo from "./Three.js.png";
import vscodePngLogo from "./Visual Studio Code (VS Code).png";
import dockerLogo from "./Docker.png";
import archLinuxLogo from "./Arch Linux.png";
import mayaLogo from "./Autodesk Maya.png";

function App() {
  /* 
     2) Build an array of your logos. 
        Order them however you want them to appear in the marquee.
  */
  const logos = [
    blenderLogo,
    bmwLogo,
    cplusplusLogo,
    cppLogo,
    csharpLogo,
    cssLogo,
    figmaLogo,
    gitLogo,
    githubLogo,
    godotEngineLogo,
    htmlLogo,
    javaLogo,
    jsLogo,
    openaiLogo,
    pythonLogo,
    sassPng,
    stripeLogo,
    tailwindLogo,
    tsLogo,
    unityPng,
    unitySvg,
    vscodeLogo,
    vuejsLogo,
    reactLogo,
    nextjsLogo,
    nodejsLogo,
    threejsLogo,
    mongodbLogo,
    mysqlLogo,
    postgresqlLogo,
    dockerLogo,
    matlabLogo,
    archLinuxLogo,
    mayaLogo,
    vscodePngLogo,
  ];

  return (
    <div className="App">
      <section className="work-section">
        <h2 className="section-title">What I work with</h2>

        {/* First marquee: scrolling right-to-left */}
        <div className="work-item">
          <div className="marquee-wrapper marquee-rtl">
            {logos.map((logo, idx) => (
              <img key={`rtl1_${idx}`} src={logo} alt="tech logo" />
            ))}
            {/* Duplicate for a seamless infinite loop */}
            {logos.map((logo, idx) => (
              <img key={`rtl2_${idx}`} src={logo} alt="tech logo" />
            ))}
          </div>
        </div>

        {/* Second marquee: scrolling left-to-right */}
        <div className="work-item">
          <div className="marquee-wrapper marquee-ltr">
            {logos.map((logo, idx) => (
              <img key={`ltr1_${idx}`} src={logo} alt="tech logo" />
            ))}
            {logos.map((logo, idx) => (
              <img key={`ltr2_${idx}`} src={logo} alt="tech logo" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
