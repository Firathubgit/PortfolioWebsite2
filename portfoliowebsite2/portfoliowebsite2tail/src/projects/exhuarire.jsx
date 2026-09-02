import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Navbar from '../Components/Header/Navbar.jsx'
import Exhuarire from '../Components/ProjectPages/Exhuarire.jsx'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className="app-container project-route">
            <Navbar />
            <Exhuarire />
        </div>
    </StrictMode>
);
