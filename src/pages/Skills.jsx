import { useMemo } from "react"
import { skills } from "../constants/skills"
import FrameworkGrid from "../components/FrameworkCards"
import TitleSection from "../components/PageTitle"
import SEOHeader from "../components/SEO/SEOHeader"
import SkillBar from "../components/SkillsBar"

const SkillsPage = () => {
  const memoSkills = useMemo(() => skills, [])

  return (
    <>
      <SEOHeader title="Rifqi Synyster" description="Skills Page references" url="https://ripqiisyns.vercel.app" image="/pp.jpg"/>

      <div className="w-full relative min-h-screen pt-20 pb-16">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <header className="text-center mb-16">
            <TitleSection text="My" highlight="Skills" description="A comprehensive overview of my technical skills and expertise across different domains of web development."   />
          </header>

          <FrameworkGrid />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-aos="zoom-out">
            {memoSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                nameSingkat={skill.nameSingkat}
                level={skill.level}
                color={skill.color}
                index={index}
              />
            ))}
          </div>
    
        </div>
      </div>
    </>
  )
}

export default SkillsPage
