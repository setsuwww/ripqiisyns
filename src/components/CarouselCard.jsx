import { techColors } from "../constants/techColor";

export default function CarouselCard({ project, onClick }) {
  return (
    <div className="w-full flex-shrink-0 px-4">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
        <div className="relative overflow-hidden cursor-pointer" onClick={onClick}>
          <img loading="lazy"
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="font-pixel text-xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Built with</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <div
                  key={i}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border backdrop-blur-sm ${
                    techColors[tech] || "from-white/10 to-white/20 border-white/20 text-white"
                  } bg-gradient-to-r`}
                >
                  <span className="font-pixel">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
