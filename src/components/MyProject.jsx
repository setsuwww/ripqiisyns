import { useState } from "react"
import { projects } from '../constants/projects'
import { techColors } from '../constants/techColor'

export default function PortfolioProjects() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <>
      {projects.map((project, index) => (
        <div key={project.id} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300" data-aos="fade-right" data-aos-duration={600 + index * 50}>
          {/* Image Section */}
          <div className="relative overflow-hidden cursor-pointer" onClick={() => openModal(index)}>
            <img src={project.image || "/placeholder.svg"} alt={project.title} loading="lazy" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h1 className="font-pixel tracking-wide text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
              {project.title}
            </h1>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">{project.description}</p>

            {/* Technology Badges */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Built with</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <div key={techIndex}
                    className={`group/badge relative overflow-hidden px-3 py-1.5 text-xs font-medium rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${techColors[tech] || "from-white/10 to-white/20 border-white/20 text-white"
                      } bg-gradient-to-r cursor-pointer`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button className="absolute top-20 right-7 bg-gray-600/30 py-2 px-5 text-white hover:text-red-500 rounded-full text-4xl" onClick={closeModal}>×</button>
          <button className="absolute left-10 bg-gray-600/30 p-2 text-white hover:text-yellow-500 text-2xl rounded-full" onClick={prev}>←</button>
          <button className="absolute right-10 bg-gray-600/30 p-2 text-white hover:text-yellow-500 text-2xl rounded-full" onClick={next}>→</button>

          <img src={projects[currentIndex].image} alt={projects[currentIndex].title} className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-lg transition-all" />
        </div>
      )}
    </>
  )
}
