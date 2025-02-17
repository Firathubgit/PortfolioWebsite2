import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from './Components/Header/Navbar.jsx'
import About from './Components/About-AboutPage/aboutAboutPage.jsx'
import Footer from './Components/Footer/Footer.jsx'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navbar />
        <About/>
        <Footer />
    </StrictMode>
);
