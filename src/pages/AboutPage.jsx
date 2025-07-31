import BallsBackground from "../components/SoftGradients"
import AboutMe from "../components/AboutMe"
import AboutPersonal from "../components/PersonalInfo"
import TitleSection from "../components/PageTitle"

import { experiences } from "../constants/experiences"

import SEOHeader from "../components/SEO/SEOHeader"

const AboutPage = () => {
  return (
    <main className="w-full relative min-h-screen pt-20 pb-16">

      <SEOHeader
        title="Rifqi Synyster"
        description="About Page references"
        url="https://ripqiisyns.vercel.app"
        image="/pp.jpg"
      />

      <BallsBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16">
          <TitleSection text="About" highlight="Me" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"/>
          <p className="h2-responsive text-gray-400 max-w-3xl mx-auto" data-aos="fade-left">
            Get to know more about my journey, skills, and passion for creating
            amazing digital experiences.
          </p>
        </header>

        <section className="grid md:grid-cols gap-8 md:gap-12 items-start">
          <article className="space-y-6" aria-label="Personal Introduction">
            <AboutPersonal />
            <AboutMe />

            <section className="glass-effect rounded-2xl p-6 md:p-8" data-aos="fade-left" aria-label="Experience Timeline">
              <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4 md:mb-6 font-pirata">
                My Experience
              </h2>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <article key={index} className="border-l-2 border-yellow-400/30 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-[0.4rem] top-2" data-aos="fade-up" data-aos-duration={600 + index * 200}></div>
                    <h3 className="font-pixel tracking-wide text-lg font-semibold text-white" data-aos="fade-right" data-aos-duration={800 + index * 200}>
                      {exp.title}
                    </h3>
                    <p className="text-violet-300 text-xs md:text-sm font-medium" data-aos="fade-right" data-aos-duration={900 + index * 200}>
                      {exp.company}
                    </p>
                    <p className="text-gray-400 mb-2 text-sm md:text-base">
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
  )
}

export default AboutPage
