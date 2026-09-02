import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Navbar from '../Components/Header/Navbar.jsx'
import CarWashTracker from '../Components/ProjectPages/CarWashTracker.jsx'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className="app-container project-route">
            <Navbar />
            <CarWashTracker />
        </div>
    </StrictMode>
);
