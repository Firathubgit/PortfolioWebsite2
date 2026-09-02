import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Navbar from '../Components/Header/Navbar.jsx'
import WackyWarriors from '../Components/ProjectPages/WackyWarriors.jsx'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className="app-container project-route">
            <Navbar />
            <WackyWarriors />
        </div>
    </StrictMode>
);
