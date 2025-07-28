import FrameworkGrid from "../components/FrameworkGrid"
import ListView from "../components/ListView"

import { learningItems } from "../constants/learningItems"
import { skills } from "../constants/skills"

const SkillsPage = () => {

  return (
    <div className="w-full relative min-h-screen pt-20 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl floating-animation" />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-aos="fade-down" data-aos-duration="1500">
            My <span className="gradient-text">𝕾𝖐𝖎𝖑𝖘𝖘</span>
          </h1>
          <p className="text-sm lg:text-base text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="1500">
            A comprehensive overview of my technical skills and expertise across different domains of web development.
          </p>
        </header>

        <FrameworkGrid />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div key={skill.name} className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              data-aos="fade-down"
              data-aos-duration={400 + index * 200}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="md:hidden text-lg font-semibold text-white">{skill.nameSingkat ?? skill.name}</h3>
                <h3 className="font-pixel hidden md:inline text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`} style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                  data-aos="slide-right"
                  data-aos-duration={800 + index * 200}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <ListView items={learningItems} />
        </div>

      </div>
    </div>
  )
}

export default SkillsPage
