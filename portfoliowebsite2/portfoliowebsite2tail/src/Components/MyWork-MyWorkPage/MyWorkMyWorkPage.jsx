import React from "react";
import "./MyWorkMyWorkPage.css";
import project3Image from "./BmwShopify.png";

const MyWorkMyWorkPage = () => {
    return (
        <section className="projets-section">
            <h2 className="projects-section-title">Startup company</h2>
            <h3 className="projects-section-undertitle" >CEO of mutial e-commers company</h3>

            <div className="projets-item">
                <div className="project-image">
                    <img src={project3Image} alt="Project preview" />
                    {/* Gradient overlay */}
                    <div className="gradient-overlay"></div>
                </div>

                <div className="project-content">
                    <h3 className="project-title">Custom Steering Wheel Shop</h3>
                    <p className="project-stack">React | Tailwind CSS | Node.js | Figma </p>
                    <p className="project-description">
                      
                    </p>
                    <a href="/projects/steering-wheel-shop" className="LearnMoreButton">
                        <span>Learn more</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MyWorkMyWorkPage;