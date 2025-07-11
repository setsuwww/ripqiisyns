import { useState } from "react"
import FrameworkGrid from "../components/FrameworkGrid"
import ListView from "../components/ListView"

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState("fullstack")

  const skills = {
    fullstack: [
      { name: "Next.js", level: 95, color: "from-white to-gray-400" },
      { name: "React.js", level: 95, color: "from-sky-400 to-sky-600" },
      { name: "Nuxt.js", level: 90, color: "from-emerald-400 to-emerald-600" },
      { name: "Vue.js", level: 90, color: "from-green-400 to-green-600" },
      { name: "Laravel", level: 95, color: "from-red-400 to-red-600" },
      { name: "PHP", level: 80, color: "from-purple-400 to-purple-600" },
      { name: "TypeScript", nameSingkat: "TS", level: 85, color: "from-blue-400 to-blue-500" },
      { name: "JavaScript", nameSingkat: "JS", level: 90, color: "from-yellow-400 to-yellow-600" },
    ],
  }

  const learningItems = [
    { label: 'Next.js & Nuxt.js SEO', color: 'bg-yellow-400' },
    { label: 'Laravel with Inertia.js', color: 'bg-red-400' },
    { label: 'MERN Stack Applications', color: 'bg-purple-400' },
  ]

  const availableItems = [
    { label: 'Available for Freelance Project', color: 'bg-yellow-400' },
    { label: 'Open to full-time oppurtinities', color: 'bg-red-400' },
    { label: 'Response time:24 Hours', color: 'bg-purple-400' },
  ]

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
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-aos="fade-down" data-aos-duration="1500">
            My <span className="gradient-text">𝕾𝖐𝖎𝖑𝖘𝖘</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="1500">
            A comprehensive overview of my technical skills and expertise across different domains of web development.
          </p>
        </div>

        <FrameworkGrid />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills[activeCategory]?.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              data-aos="fade-down"
              data-aos-duration={400 + index * 200}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="md:hidden text-lg font-semibold text-white">{skill.nameSingkat ?? skill.name}</h3>
                <h3 className="hidden md:inline text-lg font-semibold text-white">{skill.name}</h3>
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
          <ListView items={learningItems} />
          <ListView title="Availability" items={availableItems} />

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
