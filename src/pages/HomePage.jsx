import { useEffect } from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import AOS from "aos"

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl floating-animation" data-aos="zoom-in" data-aos-duration="1500" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl floating-animation" data-aos="zoom-in" data-aos-duration="1500"/>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-400/10 rounded-full blur-2xl floating-animation" data-aos="zoom-in" data-aos-duration="1500" />
      </div>

      {/* Grid Pattern */}
      <div data-aos="zoom-in" data-aos-duration="1500" className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8" data-aos="fade-right">
            <div className="relative w-3 h-3" data-aos="zoom-in" data-aos-duration="1500">
              <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" />
              <div className="relative w-full h-full rounded-full bg-green-400 animate-pulse" />
            </div>
            <span className="text-sm font-medium text-green-400" data-aos="zoom-in" data-aos-duration="1500">Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight" data-aos="fade-right">
            Hi i'am <span className="gradient-text">Rifqi Synyster</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light" data-aos="fade-right">
            Fullstack Developer & UI/UX Designer
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed" data-aos="fade-right">
            I create modern, responsive web applications using cutting-edge technologies. Passionate about clean code,
            beautiful design, and exceptional user experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#portofolio" data-aos="fade-right"
              className="group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 flex items-center">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact" data-aos="fade-right"
              className="group glass-effect border-violet-400/50 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400 px-8 py-4 rounded-full transition-all duration-300 flex items-center"
            >
              <Mail className="mr-2 w-5 h-5 group-hover:scale-125 transition-transform" />
              Get In Touch
            </a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default HomePage
