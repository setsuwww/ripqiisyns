import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './main.css'

import App from './App.jsx'
import Navigation from './components/Navigation.jsx'
import SkillsPage from './pages/Skills.jsx'
import PortfolioPage from './pages/Portofolio.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <section id="home">
        <App />
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="portofolio">
        <PortfolioPage />
      </section>

      <section id="skills">
        <SkillsPage />
      </section>

      <section id="contact">
        <ContactPage />
      </section>

    </BrowserRouter>
  </StrictMode>
)
