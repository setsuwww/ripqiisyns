import { useState, useCallback, useMemo } from "react"
import { projects as rawProjects } from "../constants/projects"
import ProjectCard from "./ProjectCard"

export default function PortfolioProjects() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = useMemo(() => rawProjects, [])

  const openModal = useCallback((index) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => setIsOpen(false), [])

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }, [projects])

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }, [projects])

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} onClick={openModal} />
      ))}

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button className="absolute top-20 right-7 bg-gray-600/30 py-2 px-5 text-white hover:text-red-500 rounded-full text-4xl" onClick={closeModal}>×</button>
          <button className="absolute left-10 bg-gray-600/30 p-2 text-white hover:text-yellow-500 text-2xl rounded-full" onClick={prev}>←</button>
          <button className="absolute right-10 bg-gray-600/30 p-2 text-white hover:text-yellow-500 text-2xl rounded-full" onClick={next}>→</button>

          <img src={projects[currentIndex].image} alt={projects[currentIndex].title}
            loading="lazy"
            decoding="async"
            className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-lg transition-all"
          />
        </div>
      )}
    </>
  )
}
