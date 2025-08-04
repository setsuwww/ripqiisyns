import { useState, useCallback } from "react"
import GridBackground from "../components/GridBackground"
import BallsBackground from "../components/SoftGradients"
import PortfolioProjects from "../components/MyProject"
import TitleSection from "../components/PageTitle"
import CarouselCard from "../components/MobileMyProject"
import ModalViewer from "../components/MobileModal"
import CarouselNav from "../components/CarouselNavigation"

import { projects } from "../constants/projects"

import SEOHeader from "@/components/SEO/SEOHeader"

export default function PortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  const minSwipe = 50
  const [startX, setStartX] = useState(null)
  const [endX, setEndX] = useState(null)

  const nextSlide = useCallback(() => setCurrentSlide((p) => (p + 1) % projects.length), [])
  const prevSlide = useCallback(() => setCurrentSlide((p) => (p - 1 + projects.length) % projects.length), [])
  const nextModal = () => setModalIndex((p) => (p + 1) % projects.length)
  const prevModal = () => setModalIndex((p) => (p - 1 + projects.length) % projects.length)

  const openModal = (index) => {
    setModalIndex(index)
    setIsModalOpen(true)
  }

  const handleTouchStart = (e) => {
    setEndX(null)
    setStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => setEndX(e.targetTouches[0].clientX)

  const handleTouchEnd = () => {
    if (!startX || !endX) return
    const delta = startX - endX
    if (delta > minSwipe) nextSlide()
    else if (delta < -minSwipe) prevSlide()
  }

  return (
    <>
      <SEOHeader
        title="Rifqi Synyster"
        description="Portfolio Page references"
        url="https://ripqiisyns.vercel.app"
        image="/pp.jpg"
      />
      <section className="relative w-full min-h-screen pt-20 pb-16 overflow-hidden bg-black">
        <GridBackground />
        <BallsBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <TitleSection 
              text="My" highlight="Portfolio"
              description="A collection of projects that showcase my skills and passion for creating amazing digital experiences."
            />
          </header>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioProjects openModal={openModal} />
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} >
              <div className="flex transition-transform" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {projects.map((project, i) => (
                  <CarouselCard key={project.id} project={project} onClick={() => openModal(i)} />
                ))}
              </div>
            </div>
            <CarouselNav onPrev={prevSlide} onNext={nextSlide} current={currentSlide} total={projects.length} />
          </div>
        </div>

        <ModalViewer
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onPrev={prevModal}
          onNext={nextModal}
          project={projects[modalIndex]}
        />
      </section>
    </>
  )
}
