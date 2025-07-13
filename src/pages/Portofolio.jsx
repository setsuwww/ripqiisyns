import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <section className="w-full relative min-h-screen pt-20 pb-16 overflow-hidden bg-black">
      <GridBackground />
      <BallsBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white" data-aos="fade-down">
            My{" "}
            <span className="bg-gradient-to-r from-violet-400 to-red-400 bg-clip-text text-transparent">𝕻𝖔𝖗𝖙𝖋𝖔𝖑𝖎𝖔</span>
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
            {/* Carousel Container */}
            <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} data-aos="fade-up" data-aos-duration={1000}>
              <div className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {projects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">

                      <div className="relative overflow-hidden cursor-pointer">
                        <img src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>

                        {/* Technology Badges */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Built with</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className={`px-3 py-1.5 text-xs font-medium rounded-full border backdrop-blur-sm transition-all duration-300 ${
                                  techColors[tech] || "from-white/10 to-white/20 border-white/20 text-white"
                                } bg-gradient-to-r`}
                              >
                                <span>{tech}</span>
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

            <button onClick={prevSlide} disabled={currentSlide === 0} data-aos="fade-right"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 z-10">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <button
              onClick={nextSlide} disabled={currentSlide === projects.length - 1} data-aos="fade-left"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 z-10">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

        </div>
      </div>

    </section>
  )
}

export default PortfolioPage
