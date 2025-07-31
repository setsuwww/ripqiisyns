import AOS from 'aos'
import 'aos/dist/aos.css'

import './App.css'

import Navigation from './components/Navigation.jsx'

import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import PortfolioPage from './pages/Portofolio.jsx'
import SkillsPage from './pages/Skills.jsx'
import ContactPage from './pages/ContactPage.jsx'

import Footer from './components/Footer.jsx'

AOS.init()

const UserLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <Navigation />

      <section id="home" className="w-full">
        <HomePage />
      </section>

      <section id="about" className="w-full">
        <AboutPage />
      </section>

      <section id="portfolio" className="w-full">
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
  )
}
export default UserLayout
