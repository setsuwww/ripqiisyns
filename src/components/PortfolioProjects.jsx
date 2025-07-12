import { projects } from '../constants/projects'
import { techColors } from '../constants/techColor'

export default function PortfolioProjects() {
  return (
    <>
      {projects.map((project, index) => (
        <div key={project.id} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300" data-aos="fade-right" data-aos-duration={600 + index * 50}>
          {/* Image Section */}
          <div className="relative overflow-hidden cursor-pointer">
            <img src={project.image || "/placeholder.svg"} alt={project.title} loading="lazy" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h1 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
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
      ))
      }
    </>
  )
}
