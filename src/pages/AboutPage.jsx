import { MapPin, Calendar, GraduationCap } from "lucide-react"
import "../App.css"

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
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl floating-animation" data-aos="zoom-out" data-aos-duration="1500" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl floating-animation" data-aos="zoom-out" data-aos-duration="1500" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-400/10 rounded-full blur-2xl floating-animation" data-aos="zoom-out" data-aos-duration="1500" />
      </div>

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
            <p data-aos="fade-right" data-aos-duration="1000">About <span className="gradient-text">Me</span></p>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto" data-aos="fade-left">
            Get to know more about my journey, skills, and passion for creating amazing digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols gap-8 md:gap-12 items-start">

          {/* Right Column - Content Section */}
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-6" data-aos="fade-left">
              <h3 className="text-xl md:text-2xl font-bold gradient-text mb-4">Personal Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-yellow-400/20 flex-shrink-0" data-aos="fade-right">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                    <p className="text-gray-300">Jl. Kp. Pulo, Sumberjaya, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17510</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-violet-400/20 flex-shrink-0" data-aos="fade-right">
                    <GraduationCap className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Education</p>
                    <p className="text-gray-300">SMK Telekomunikasi Telesandi Bekasi</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-red-400/20 flex-shrink-0" data-aos="fade-right">
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
            <div className="glass-effect rounded-2xl p-6 md:p-8" data-aos="fade-left">
              <h3 className="text-xl md:text-2xl font-bold gradient-text mb-4 md:mb-6">Did u know me?</h3>
              <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm <span className="text-white font-semibold">Rifqi Ibrahim</span>, a passionate fullstack developer
                  currently studying at SMK Telekomunikasi Telesandi Bekasi. My journey in web
                  development started with curiosity about how websites work.
                </p>
                <p>
                  I specialize in modern web technologies including the MERN stack MongoDB, Express.js, React.js,
                  Node.js, and I'm also proficient in Nextjs and Laravel.
                </p>
                <p>
                  I like coding, drawing, writing, and playing guitar and i want to be like Synyster gate
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="glass-effect rounded-2xl p-6 md:p-8" data-aos="fade-left">
              <h3 className="text-xl md:text-2xl font-bold gradient-text mb-4 md:mb-6">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-yellow-400/30 pl-6 relative">
                    <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-[0.5rem] top-2" data-aos="fade-up" data-aos-duration={600 + index * 200}></div>
                    <h4 className="text-lg font-semibold text-white" data-aos="fade-right" data-aos-duration={800 + index * 200}>{exp.title}</h4>
                    <p className="text-violet-400 font-medium">{exp.company}</p>
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
