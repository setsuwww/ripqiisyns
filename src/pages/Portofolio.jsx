"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const techColors = {
  MongoDB: "from-green-500/20 to-green-600/20 border-green-400/30 text-green-300",
  Expressjs: "from-yellow-500/20 to-yellow-600/20 border-yellow-400/30 text-yellow-300",
  Prismajs: "from-indigo-500/20 to-indigo-600/20 border-indigo-400/30 text-indigo-300",
  React: "from-blue-500/20 to-blue-600/20 border-blue-400/30 text-blue-300",
  Reactts: "from-blue-500/20 to-blue-600/20 border-blue-400/30 text-blue-300",
  Tailwindcss: "from-cyan-500/20 to-cyan-600/20 border-cyan-400/30 text-cyan-300",
  Nodejs: "from-green-300/20 to-green-400/20 border-green-400/30 text-green-300",
  Nextjs: "from-gray-800/20 to-black/20 border-white/30 text-white",
  Vuejs: "from-green-500/20 to-green-600/20 border-green-400/30 text-green-300",
  Typescript: "from-blue-500/20 to-blue-600/20 border-blue-400/30 text-blue-300",
  MySQL: "from-orange-500/20 to-orange-600/20 border-orange-400/30 text-orange-300",
  PHP: "from-purple-500/20 to-purple-600/20 border-purple-400/30 text-purple-300",
  Javascript: "from-yellow-500/20 to-yellow-600/20 border-yellow-400/30 text-yellow-300",
  CSS: "from-blue-500/20 to-blue-600/20 border-blue-400/30 text-blue-300",
  Laravel: "from-red-500/20 to-red-600/20 border-red-400/30 text-red-300",
  Alpinejs: "from-purple-500/20 to-purple-600/20 border-purple-400/30 text-purple-300",
  Livewire: "from-pink-500/20 to-pink-600/20 border-pink-400/30 text-pink-300",
}

const PortfolioPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const carouselRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "EZ-Management",
      description:
        "Modern e-commerce platform built with MongoDB for database, Expressjs for API, Reactts, Typescript for save typing, and Nodejs for runtimer",
      image: "/EZ.png",
      technologies: ["MongoDB", "Expressjs", "Prismajs", "React", "Tailwindcss", "Nodejs"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Tourvue",
      description:
        "It's my first project used for Touring application, made by Mysql for database, Expressjs for API, Vuejs for frontend, Nodejs for Runtimer",
      image: "/Tourvue.png",
      technologies: ["MongoDB", "Expressjs", "Vuejs", "Tailwindcss", "Nodejs"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Ramen Delight",
      description:
        "It's my pure PHP Native Application, for Interactive animation i use Javascript and Tailwindcss, and CSS for Designing",
      image: "/Ramen.png",
      technologies: ["PHP", "Javascript", "Tailwindcss", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Rinafa Homestay",
      description:
        "This is a Company Profile project made with Nextjs with Typescript Extension, Nextjs used for static simple Routing",
      image: "/RH.png",
      technologies: ["MongoDB", "Expressjs", "Prismajs", "Nextjs", "Tailwindcss"],
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "Artilia OpenAI",
      description:
        "I made a Company profile for My Freelance team with base Simple AI for Daily with OpenAI API and JS Technologies",
      image: "/ArtiliaAI.png",
      technologies: ["MySQL", "Expressjs", "React", "Nodejs"],
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "Companies Management",
      description:
        "This is a My Biggest Project, i made it from Laravel, Blade, Tailwind & Alpinejs for Frontend, Livewire for Interactive UI without refreshing",
      image: "/CM.png",
      technologies: ["MySQL", "Laravel", "Tailwindcss", "Alpinejs", "Livewire"],
      github: "#",
      demo: "#",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const openImageModal = (image) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  // Touch handlers for swipe functionality
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

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
    <div className="relative min-h-screen pt-20 pb-16 overflow-hidden bg-black">
      {/* Grid Background */}
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"
      />

      {/* Floating Lights */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-red-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            My{" "}
            <span className="bg-gradient-to-r from-violet-400 to-red-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden cursor-pointer" onClick={() => openImageModal(project.image)}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                {/* Technology Badges */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Built with</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className={`group/badge relative overflow-hidden px-3 py-1.5 text-xs font-medium rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                          techColors[tech] || "from-white/10 to-white/20 border-white/20 text-white"
                        } bg-gradient-to-r cursor-pointer`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="relative z-10">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {/* Carousel Container */}
            <div
              className="overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                ref={carouselRef}
              >
                {projects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                      {/* Image Section */}
                      <div
                        className="relative overflow-hidden cursor-pointer"
                        onClick={() => openImageModal(project.image)}
                      >
                        <img
                          src={project.image || "/placeholder.svg"}
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

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 z-10"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 z-10"
              disabled={currentSlide === projects.length - 1}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-violet-400 w-8" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default PortfolioPage
