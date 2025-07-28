import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import '../App.css'
import GridBackground from "../components/GridBackground"
import BallsBackground from "../components/Balls"
import { projects } from "../constants/projects"
import { techColors } from "../constants/techColor"
import PortfolioProjects from "../components/PortfolioProjects"

const PortfolioPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef(null)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projects.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)

  const nextModal = () => setModalIndex((prev) => (prev + 1) % projects.length)
  const prevModal = () => setModalIndex((prev) => (prev - 1 + projects.length) % projects.length)

  const openModal = (index) => {
    setModalIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  const minSwipeDistance = 50
  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) nextSlide()
    if (distance < -minSwipeDistance) prevSlide()
  }

  return (
    <section className="w-full relative min-h-screen pt-20 pb-16 overflow-hidden bg-black">
      <GridBackground />
      <BallsBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white" data-aos="fade-down">
            My <span className="bg-gradient-to-r from-violet-400 to-red-400 bg-clip-text text-transparent">𝕻𝖔𝖗𝖙𝖋𝖔𝖑𝖎𝖔</span>
          </h1>
          <p className="text-sm lg:text-base text-gray-400 max-w-3xl mx-auto" data-aos="fade-up">
            A collection of projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </header>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioProjects />
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} data-aos="fade-up">
              <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }} ref={carouselRef}>
                {projects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                      {/* Clickable Image */}
                      <div className="relative overflow-hidden cursor-pointer" onClick={() => openModal(index)}>
                        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-pixel text-xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                        <div className="space-y-3">
                          <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Built with</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <div key={techIndex} className={`px-3 py-1.5 text-xs font-medium rounded-full border backdrop-blur-sm ${techColors[tech] || "from-white/10 to-white/20 border-white/20 text-white"} bg-gradient-to-r`}>
                                <span className="font-pixel">{tech}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={prevSlide} disabled={currentSlide === 0} data-aos="fade-right" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 z-10">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button onClick={nextSlide} disabled={currentSlide === projects.length - 1} data-aos="fade-left" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 z-10">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* MODAL VIEWER */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeModal}><X /></button>
          <button className="absolute left-4 text-white text-2xl" onClick={prevModal}><ChevronLeft /></button>
          <button className="absolute right-4 text-white text-2xl" onClick={nextModal}><ChevronRight /></button>

          <img src={projects[modalIndex].image} alt="Preview" className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg" />
        </div>
      )}
    </section>
  )
}

export default PortfolioPage
