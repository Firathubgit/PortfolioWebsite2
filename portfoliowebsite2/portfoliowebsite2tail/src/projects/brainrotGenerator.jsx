import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Navbar from '../Components/Header/Navbar.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import BrainrotGenerator from '../Components/ProjectPages/BrainrotGenerator.jsx'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navbar />
        <BrainrotGenerator />
        <Footer />
    </StrictMode>
); 