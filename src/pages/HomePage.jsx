import { useEffect } from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import AOS from "aos"
import BallsBackground from "../components/Balls"
import TypingEffect from "../components/TypingEffect"
import GridBackground from "../components/GridBackground"
import TitleSection from "../components/TitleSection"

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <div className="w-full relative min-h-screen overflow-hidden">
      <BallsBackground />

      <GridBackground />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-tr from-transparent to-green-500/10 glass-effect mb-8 mt-18 lg:mt-8" data-aos="fade-right">
            <div className="relative w-3 h-3" data-aos="zoom-in" data-aos-duration="1500">
              <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" />
              <div className="relative w-full h-full rounded-full bg-green-400 animate-pulse" />
            </div>
            <span className="text-sm font-medium text-green-400" data-aos="zoom-in" data-aos-duration="1500">Available</span>
          </div>

          <TitleSection
            text="Hi I'm"
            highlight="𝕽𝖎𝖋𝖖𝖎 𝕾𝖞𝖓𝖞𝖘𝖙𝖊𝖗"
          />

          <TypingEffect />

          {/* Description */}
          <p className="text-md text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-duration="1000">
            I create modern, responsive web applications using cutting-edge technologies. Passionate about clean code,
            beautiful design, and exceptional user experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#portofolio" data-aos="fade-right" data-aos-duration="1500"
              className="group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 flex items-center">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="#contact" className="group relative px-8 py-4 rounded-full text-violet-300 font-semibold border-b-2 border-violet-800 hover:border-violet-400 group overflow-hidden z-10 bg-black/30">
              <span className="relative z-10 flex items-center">
                <Mail className="group-hover:scale-125 transform transition-transform mr-2 w-5 h-5" />
                Get In Touch
              </span>
              <span className="absolute inset-0 rounded-full border-2 border-transparent pointer-events-none z-0 shine-border"></span>
            </a>

          </div>

        </div>
      </div>

    </div>
  )
}

export default HomePage
