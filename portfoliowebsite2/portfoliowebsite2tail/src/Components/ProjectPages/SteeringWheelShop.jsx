import React from 'react';
import ImageCarousel from './ImageCarousel';
import shopifyStore1 from '../Projects-ProjectPage/ShopifyStoreProject1.png';
import shopifyStore2 from '../Projects-ProjectPage/ShopifyStoreProject2.png';
import shopifyStore3 from '../Projects-ProjectPage/ShopifyStoreProject3.png';
import './ProjectPages.css';

const SteeringWheelShop = () => {
  const images = [
    shopifyStore1,
    shopifyStore2,
    shopifyStore3
  ];

  return (
    <div className="project-page-container">
      <h1 className="project-page-title">Custom Steering Wheel Shop</h1>
      
      <div className="project-page-hero">
        <ImageCarousel images={images} />
      </div>

      <div className="project-page-content">
        <section className="project-section">
          <h2>Overview</h2>
          <p className="project-stack">React | Tailwind CSS | Node.js | Figma</p>
          <p>
            A React-based e-commerce platform offering customizable luxury steering wheels. Features material options 
            and immersive camera animations powered by Unity 3D, seamlessly integrated into the website. Designed for 
            automotive enthusiasts with a focus on high-end UI and user experience.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul>
            <li>Interactive 3D product configurator</li>
            <li>Real-time material and color customization</li>
            <li>Seamless Unity integration for 3D visualization</li>
            <li>Responsive and modern UI design</li>
            <li>Secure payment processing</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Technology Stack</h2>
          <ul>
            <li>React - Frontend framework</li>
            <li>Tailwind CSS - Styling</li>
            <li>Node.js - Backend development</li>
            <li>Unity - 3D visualization</li>
            <li>Figma - UI/UX design</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Development Process</h2>
          <p>
            This project focused on creating a premium e-commerce experience for automotive enthusiasts. 
            Special attention was given to the 3D configurator integration and ensuring a smooth, 
            intuitive customization process for users.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SteeringWheelShop; 