import { frameworks } from "../constants/frameworks";

export default function FrameworkGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
      {frameworks.map(({ Icon, title, color, bg, border, duration, description }) => (
        <div
          key={title}
          data-aos="zoom-in"
          data-aos-duration={duration}
          className={`glass-effect relative rounded-2xl p-6 flex flex-col items-start hover:bg-white/10 transition-all duration-300 ${border}`}
        >
          <div className={`w-12 h-12 mb-4 rounded-full ${bg} flex items-center justify-center`}>
            <Icon className={`w-8 h-8 ${color}`} />
          </div>
          <h4 className={`font-pixel text-2xl font-semibold mb-2 ${color}`}>{title}</h4>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      ))}
    </div>
  )
}
