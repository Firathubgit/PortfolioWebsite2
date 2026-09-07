import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Header/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Education from './Components/Education/Education.jsx'
import ResumeButton from './Components/ResumeButton/ResumeButton.jsx'
import Footer from './Components/Footer/Footer.jsx'
import CarWashTracker from './Components/ProjectPages/CarWashTracker.jsx'
import WackyWarriors from './Components/ProjectPages/WackyWarriors.jsx'
import BrainrotGenerator from './Components/ProjectPages/BrainrotGenerator.jsx'
import SteeringWheelShop from './Components/ProjectPages/SteeringWheelShop.jsx'
import Exhuarire from './Components/ProjectPages/Exhuarire.jsx'
import GatesOfHell from './Components/ProjectPages/GatesOfHell.jsx'
import Terrahutton from './Components/ProjectPages/Terrahutton.jsx'
import Volturiano from './Components/ProjectPages/Volturiano.jsx'
import AndroidCarInfotainment from './Components/ProjectPages/AndroidCarInfotainment.jsx'

// Get the current page path
const path = window.location.pathname;

// Only handle project pages, leave the main app structure unchanged
const getContent = () => {
  if (path.startsWith('/projects/')) {
    switch (path) {
      case '/projects/android-car-infotainment':
        return (
          <div className="app-container project-route">
            <Navbar />
            <AndroidCarInfotainment />
          </div>
        );
      case '/projects/car-wash-tracker':
        return (
          <div className="app-container project-route">
            <Navbar />
            <CarWashTracker />
          </div>
        );
      case '/projects/wacky-warriors':
        return (
          <div className="app-container project-route">
            <Navbar />
            <WackyWarriors />
          </div>
        );
      case '/projects/brainrot-generator':
        return (
          <div className="app-container project-route">
            <Navbar />
            <BrainrotGenerator />
          </div>
        );
      case '/projects/steering-wheel-shop':
        return (
          <div className="app-container project-route">
            <Navbar />
            <SteeringWheelShop />
          </div>
        );
      case '/projects/exhuarire':
        return (
          <div className="app-container project-route">
            <Navbar />
            <Exhuarire />
          </div>
        );
      case '/projects/gates-of-hell':
        return (
          <div className="app-container project-route">
            <Navbar />
            <GatesOfHell />
          </div>
        );
      case '/projects/terrahutton':
        return (
          <div className="app-container project-route">
            <Navbar />
            <Terrahutton />
          </div>
        );
      case '/projects/volturiano':
        return (
          <div className="app-container project-route">
            <Navbar />
            <Volturiano />
          </div>
        );
      default:
        return null;
    }
  }

  // Return null for non-project pages to use default app structure
  return null;
};

const content = getContent();

// If we have specific project page content, render that, otherwise render the default app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {content || (
      <>
    <Navbar/>
    <Hero/>
    <App />
    <Projects />
    <Education />
    <ResumeButton/>
    <Footer/>
      </>
    )}
  </StrictMode>,
)
