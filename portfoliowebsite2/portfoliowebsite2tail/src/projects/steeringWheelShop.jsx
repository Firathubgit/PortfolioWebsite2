import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Navbar from '../Components/Header/Navbar.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import SteeringWheelShop from '../Components/ProjectPages/SteeringWheelShop.jsx'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navbar />
        <SteeringWheelShop />
        <Footer />
    </StrictMode>
); 