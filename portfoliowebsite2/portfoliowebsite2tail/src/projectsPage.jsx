import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from './Components/Header/Navbar.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Footer from './Components/Footer/Footer.jsx'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navbar />
        <Projects />
        <Footer />
    </StrictMode>
);
