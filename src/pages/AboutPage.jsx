import { GraduationCap } from "lucide-react"

import BallsBackground from "../components/common/SoftGradients"
import AboutMe from "../components/content/About/AboutMe"
import AboutPersonal from "../components/content/About/PersonalInfo"
import TitleSection from "../components/common/PageTitle"

import { experiences } from "../constants/experiences"

import SEOHeader from "../components/SEO/SEOHeader"
import TitleForm from "@/components/common/FormTitle"

const AboutPage = () => {
  return (
    <>
      <SEOHeader title="Ripsynss" description="About Page references" url="https://ripsynss.vercel.app" image="/pp.webp" />
      <main className="w-full relative min-h-screen pt-20 pb-16">

        <BallsBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12 md:mb-16">
            <TitleSection
              text="About" highlight="Me"
              description="Get to know more about my journey, skills, and passion for creating amazing digital experiences."
            />
          </header>

          <section className="grid md:grid-cols gap-8 md:gap-12 items-start">
            <article className="space-y-6" aria-label="Personal Introduction">
              <AboutPersonal />
              <AboutMe />

              <section className="glass-effect rounded-2xl p-6 md:p-8" data-aos="fade-left" aria-label="Experience Timeline">
                <TitleForm title="My Experience" />

                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <article key={index} className="border-l-2 border-yellow-400/20 pl-6 relative">
                      <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-[0.4rem] top-[7px]" data-aos="fade-up" data-aos-duration={600 + index * 200}></div>
                      <h3 className="tracking-wide text-sm md:text-md font-semibold bg-gradient-to-r from-orange-400 to-yellow-200 bg-clip-text text-transparent inline-block" data-aos="fade-right" data-aos-duration={700 + index * 150}>
                        {exp.title}
                      </h3>
                      <p className="flex items-center space-x-2 text-violet-500 text-xs md:text-sm font-medium" data-aos="fade-right" data-aos-duration={800 + index * 100}>
                        <GraduationCap className="w-4 h-4"/> <span>{exp.company}</span>
                      </p>
                      <p className="text-gray-400 mt-1 mb-2 text-xs md:sm">
                        {exp.period}
                      </p>
                      <p className="text-gray-300 text-xs md:text-sm">
                        {exp.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </article>
          </section>
        </div>
      </main>
    </>
  )
}

export default AboutPage
