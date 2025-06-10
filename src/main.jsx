import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './main.css'

import Navigation from './components/Navigation.jsx'
import App from './App.jsx'
import SkillsPage from './pages/Skills.jsx'
import PortfolioPage from './pages/Portofolio.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Footer from './components/Footer.jsx'

AOS.init()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Navigation />
        
        <section id="home" className="w-full">
          <App />
        </section>

        <section id="about" className="w-full">
          <AboutPage />
        </section>

        <section id="portofolio" className="w-full">
          <PortfolioPage />
        </section>

        <section id="skills" className="w-full">
          <SkillsPage />
        </section>

        <section id="contact" className="w-full">
          <ContactPage />
        </section>

        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
)
