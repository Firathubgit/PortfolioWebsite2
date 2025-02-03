import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from './Components/Header/Navbar.jsx'
import ProjectsProjectPage from './Components/Projects-ProjectPage/ProjectsProjectPage.jsx'
import Footer from './Components/Footer/Footer.jsx'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navbar />
        <ProjectsProjectPage />
        <Footer />
    </StrictMode>
);
