import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import BallsBackground from "../components/Balls"
import TypingEffect from "../components/TypingEffect"
import GridBackground from "../components/GridBackground"
import TitleSection from "../components/TitleSection"
import WelcomeBadge from "../components/WelcomeBadge"
import { Meteors } from "../components/magicui/meteors"

const description = "I Create modern web applications, SEO Friendly, Semantic code and are Responsive using contemporary technology. Perfectionist about clean reusable code, beautiful UI design and Awesome UX";

const HomePage = () => {
  return (
    <section className="w-full relative min-h-screen overflow-hidden">
      <Meteors number={30} />

      <BallsBackground />
      <GridBackground />

      {/* Main Content */}
      <article className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-5xl mx-auto">
          <WelcomeBadge />

          {/* Name */}
          <TitleSection text="Hi I'm" highlight="𝕽𝖎𝖋𝖖𝖎 𝕾𝖞𝖓𝖞𝖘𝖙𝖊𝖗" />

          {/* Profesion */}
          <TypingEffect />

          {/* Description of yourself */}
          <p className="shiny-text h2-responsive text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-duration="1000">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#portofolio" data-aos="fade-right" data-aos-duration="1500"
              className="group bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 border-0 border-b-2 border-yellow-100 hover:border-transparent text-black font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 flex items-center">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="#contact" className="group relative px-8 py-4 rounded-full text-violet-300 font-semibold border-b-2 border-violet-800 hover:border-violet-400 group overflow-hidden z-10 bg-gradient-to-b from-transparent via-transparent to-transparent hover:via-violet-300/10 hover:to-violet-500/20">
              <span className="relative z-10 flex items-center">
                <Mail className="group-hover:scale-125 transform transition-transform mr-2 w-5 h-5" />
                Get In Touch
              </span>
              <span className="absolute inset-0 rounded-full border-2 border-transparent pointer-events-none z-0 shine-border"></span>
            </a>
          </div>

        </div>
      </article>

    </section>
  )
}

export default HomePage
