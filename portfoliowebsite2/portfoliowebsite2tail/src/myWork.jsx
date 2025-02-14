import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from './Components/Header/Navbar.jsx'
import MyWorkMyWorkPage from './Components/MyWork-MyWorkPage/MyWorkMyWorkPage.jsx'
import Footer from './Components/Footer/Footer.jsx'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navbar />
        <MyWorkMyWorkPage />
        <Footer />
    </StrictMode>
);
