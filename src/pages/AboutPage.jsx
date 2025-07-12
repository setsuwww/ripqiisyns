import { MapPin, Calendar, GraduationCap } from "lucide-react"
import "../App.css"
import BallsBackground from "../components/Balls"
import AboutMe from "../components/AboutMe"
import TitleForm from "../components/TitleForm"

const AboutPage = () => {
  const experiences = [
    {
      title: "System Analyst",
      company: "Student",
      period: "2021 - 2022",
      description: "Designing a Database structure and Flowchart before Building Applications",
    },
    {
      title: "Frontend Developer",
      company: "Student",
      period: "2022 - 2023",
      description: "Building modern web applications with React, and Tailwind CSS",
    },
    {
      title: "Fullstack Developer",
      company: "Student",
      period: "2023 - Present",
      description: "Building a funcionality applications",
    },
  ]

  return (
    <div className="w-full relative min-h-screen pt-20 pb-16">
      <BallsBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="flex items-center text-center justify-center space-x-2 lg:space-x-4 text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <img
              src="/pp.jpg"
              alt="Rifqi Ibrahim"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="w-20 h-20 object-cover rounded-full grayscale hover:grayscale-0 ease-in-out duration-300"
            />
            <p data-aos="fade-right" data-aos-duration="1000">About <span className="gradient-text">𝕸𝖊</span></p>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto" data-aos="fade-left">
            Get to know more about my journey, skills, and passion for creating amazing digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols gap-8 md:gap-12 items-start">

          {/* Right Column - Content Section */}
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-6" data-aos="fade-left" data-aos-duration="800">
              <TitleForm title="Personal Info" />

              <div className="space-y-4">
                <div className="flex items-center space-x-3" data-aos="fade-right" data-aos-delay="200">
                  <div className="p-2 rounded-full bg-yellow-400/20 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                    <p className="text-gray-300">
                      Jl. Kp. Pulo, Sumberjaya, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17510
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3" data-aos="fade-up" data-aos-delay="300">
                  <div className="p-2 rounded-full bg-violet-400/20 flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Education</p>
                    <p className="text-gray-300">SMK Telekomunikasi Telesandi Bekasi</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3" data-aos="fade-left" data-aos-delay="400">
                  <div className="p-2 rounded-full bg-red-400/20 flex-shrink-0">
                    <Calendar className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Status</p>
                    <p className="text-gray-300">Available for opportunities</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Bio */}
            <AboutMe />

            {/* Experience */}
            <div className="glass-effect rounded-2xl p-6 md:p-8" data-aos="fade-left">
              <h3 className="text-xl md:text-2xl font-bold gradient-text mb-4 md:mb-6">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-yellow-400/30 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-[0.5rem] top-2" data-aos="fade-up" data-aos-duration={600 + index * 200}></div>
                    <h4 className="text-lg font-semibold text-white" data-aos="fade-right" data-aos-duration={800 + index * 200}>{exp.title}</h4>
                    <p className="text-violet-300 font-medium" data-aos="fade-right" data-aos-duration={900 + index * 200}>{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutPage
