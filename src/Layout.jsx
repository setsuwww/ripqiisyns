import React, { lazy, Suspense } from 'react'

import './App.css'

import Navigation from './components/Navigation.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const PortfolioPage = lazy(() => import('./pages/Portofolio.jsx'))
const SkillsPage = lazy(() => import('./pages/Skills.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))

import Footer from './components/Footer.jsx'
import { SectionLoader } from './components/SectionLoader'

const UserLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <Navigation />

      <Suspense fallback={<SectionLoader />}>
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
      </Suspense>

      <Footer />
    </div>
  )
}
export default UserLayout
