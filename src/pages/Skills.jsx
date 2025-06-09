import { useState } from "react"
import { Code, Palette, Server, Database, Globe, Smartphone } from "lucide-react"

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState("fullstack")

  const skillCategories = [
    { id: "fullstack", label: "Fullstack", icon: Code },
  ]

  const skills = {
    fullstack: [
      { name: "Next.js", level: 95, color: "from-white to-gray-400" },
      { name: "React.js", level: 95, color: "from-sky-400 to-sky-600" },
      { name: "Vue.js", level: 90, color: "from-green-400 to-green-600" },
      { name: "Angular", level: 75, color: "from-red-400 to-red-600" },
      { name: "Laravel", level: 95, color: "from-red-400 to-red-600" },
      { name: "PHP", level: 80, color: "from-purple-400 to-purple-600" },
      { name: "TypeScript", level: 85, color: "from-blue-400 to-blue-500" },
      { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
    ],
  }

  return (
    <div className="relative min-h-screen pt-20 pb-16">
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
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-aos="fade-down" data-aos-duration="1500">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-aos="fade-down" data-aos-duration="1500">
            A comprehensive overview of my technical skills and expertise across different domains of web development.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills[activeCategory]?.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              data-aos="fade-down"
              data-aos-duration={600 + index * 200}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Learning */}
          <div className="glass-effect rounded-2xl p-8" data-aos="fade-down" data-aos-duration="1500">
            <h3 className="text-2xl font-bold gradient-text mb-6">Currently Learning</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative w-3 h-3">
                  <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-75 animate-ping" />
                  <div className="relative w-full h-full rounded-full bg-yellow-400 animate-pulse" />
                </div>
                <span className="text-gray-300">MERN Fullstack Application</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="relative w-3 h-3">
                  <div className="absolute inset-0 rounded-full bg-violet-400 opacity-75 animate-ping" />
                  <div className="relative w-full h-full rounded-full bg-violet-400 animate-pulse" />
                </div>
                <span className="text-gray-300">Laravel Application</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="relative w-3 h-3">
                  <div className="absolute inset-0 rounded-full bg-red-400 opacity-75 animate-ping" />
                  <div className="relative w-full h-full rounded-full bg-red-400 animate-pulse" />
                </div>
                <span className="text-gray-300">Typescript</span>
              </div>

            </div>
          </div>

          {/* Certifications 
          <div className="glass-effect rounded-2xl p-8" data-aos="fade-down" data-aos-duration="1500">
            <h3 className="text-2xl font-bold gradient-text mb-6">Certifications</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-yellow-400/30 pl-4">
                <h4 className="font-semibold text-white">React Developer Certification</h4>
                <p className="text-sm text-gray-400">Meta - 2023</p>
              </div>
              <div className="border-l-2 border-violet-400/30 pl-4">
                <h4 className="font-semibold text-white">JavaScript Algorithms</h4>
                <p className="text-sm text-gray-400">freeCodeCamp - 2023</p>
              </div>
              <div className="border-l-2 border-red-400/30 pl-4">
                <h4 className="font-semibold text-white">Laravel E-Learn</h4>
                <p className="text-sm text-gray-400">freeCodeCamp - 2022</p>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  )
}

export default SkillsPage
