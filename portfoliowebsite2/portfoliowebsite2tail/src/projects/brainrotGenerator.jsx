import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Navbar from '../Components/Header/Navbar.jsx'
import BrainrotGenerator from '../Components/ProjectPages/BrainrotGenerator.jsx'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className="app-container project-route">
            <Navbar />
            <BrainrotGenerator />
        </div>
    </StrictMode>
);
