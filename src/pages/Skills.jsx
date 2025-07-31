import FrameworkGrid from "../components/FrameworkCards"
import { RetroGrid } from "../components/magicui/retro-grid"
import TitleSection from "../components/PageTitle"

import { skills } from "../constants/skills"

import SEOHeader from "../components/SEO/SEOHeader"
const SkillsPage = () => {

  return (
    <>
      <SEOHeader
        title="Rifqi Synyster"
        description="Skills Page references"
        url="https://ripqiisyns.vercel.app"
        image="/pp.jpg"
      />
      <div className="w-full relative min-h-screen pt-20 pb-16">
        <RetroGrid />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <TitleSection text="My" highlight="Skills" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white" />
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

        </div>
      </div>
    </>
  )
}

export default SkillsPage
