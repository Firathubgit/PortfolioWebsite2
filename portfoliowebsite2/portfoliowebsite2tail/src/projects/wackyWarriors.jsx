import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Navbar from '../Components/Header/Navbar.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import WackyWarriors from '../Components/ProjectPages/WackyWarriors.jsx'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navbar />
        <WackyWarriors />
        <Footer />
    </StrictMode>
); 