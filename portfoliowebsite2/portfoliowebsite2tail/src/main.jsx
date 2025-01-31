import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Header/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Education from './Components/Education/Education.jsx'
import Resumebutton from './Components/ResumeButton/ResumeButton.jsx'
import Footer from './Components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Hero/>
    <App />
    <Projects />
    <Education />
    <Resumebutton/>
    <Footer/>
  </StrictMode>,
)
