import BallsBackground from "../components/Balls"
import AboutMe from "../components/AboutMe"
import AboutPersonal from "../components/AboutPersonal"

import { experiences } from "../constants/experiences"

const AboutPage = () => {
  return (
    <section className="w-full relative min-h-screen pt-20 pb-16">
      <BallsBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="flex items-center text-center justify-center space-x-2 lg:space-x-4 text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <img src="/pp.jpg" alt="Rifqi Ibrahim" 
              data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
              className="w-20 h-20 object-cover rounded-full grayscale hover:grayscale-0 ease-in-out duration-300"
            />
            <p data-aos="fade-right" data-aos-duration="1000">About <span className="gradient-text">𝕸𝖊</span></p>
          </h1>
          <p className="h2-responsive text-gray-400 max-w-3xl mx-auto" data-aos="fade-left">
            Get to know more about my journey, skills, and passion for creating amazing digital experiences.
          </p>
        </header>

        <div className="grid md:grid-cols gap-8 md:gap-12 items-start">

          {/* Right Column - Content Section */}
          <div className="space-y-6">
            <AboutPersonal/>

            <AboutMe />

            {/* Experience */}
            <div className="glass-effect rounded-2xl p-6 md:p-8" data-aos="fade-left">
              <h3 className="text-xl md:text-2xl font-bold gradient-text mb-4 md:mb-6 font-pirata">My Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-yellow-400/30 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-[0.4rem] top-2" data-aos="fade-up" data-aos-duration={600 + index * 200}></div>
                    <h4 className="font-pixel text-lg font-semibold text-white" data-aos="fade-right" data-aos-duration={800 + index * 200}>{exp.title}</h4>
                    <p className="text-violet-300 font-medium" data-aos="fade-right" data-aos-duration={900 + index * 200}>{exp.company}</p>
                    <p className="text-gray-400 mb-2 text-sm md:text-base">{exp.period}</p>
                    <p className="text-gray-300 text-xs md:text-base">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutPage
