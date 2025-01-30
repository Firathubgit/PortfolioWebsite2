import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Header/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>

    <Hero/>
    <App />
  </StrictMode>,
)
