import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Idols from "./Idols"
import TitleForm from "./TitleForm"

export default function AboutSection() {
  const [showIdols, setShowIdols] = useState(false)

  const toggleIdols = () => {
    setShowIdols(prev => !prev)
  }

  return (
    <div className="glass-effect rounded-2xl p-6 md:p-8" data-aos="fade-left">
      <TitleForm title="Did U Know me?"/>

      <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed text-xs md:text-base">
        <p>
          I'm <span className="text-white font-semibold">Rifqi Ibrahim</span>, a passionate fullstack developer
          currently studying at SMK Telekomunikasi Telesandi Bekasi. My journey in web development started
          with curiosity about how websites work.
        </p>
        <p>
          I specialize in modern web technologies including the Nextjs with React & the SEO Performance,
          and I'm also proficient in Nuxtjs with Vue and Laravel with Inertiajs.
        </p>
        <p>
          I like coding, drawing, writing, and playing guitar and I want to be like my idols.
        </p>
      </div>

      <button onClick={toggleIdols} className="mt-6 flex items-center text-yellow-400 hover:text-yellow-300 transition-all">
        {showIdols ? (
          <>
            <span>Hide Idols</span>
            <ChevronUp className="w-5 h-5 ml-2" />
          </>
        ) : (
          <>
            <span>Show Idols</span>
            <ChevronDown className="w-5 h-5 ml-2" />
          </>
        )}
      </button>

      {showIdols && (
        <div className="mt-4">
          <Idols />
        </div>
      )}
    </div>
  )
}
