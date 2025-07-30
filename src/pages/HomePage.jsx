import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import BallsBackground from "../components/Balls"
import TypingEffect from "../components/TypingEffect"
import GridBackground from "../components/GridBackground"
import TitleSection from "../components/TitleSection"
import WelcomeBadge from "../components/WelcomeBadge"
import { Meteors } from "../components/magicui/meteors"
import ActionButtons from "../components/ActionButton"

const description = "I Create modern web applications, SEO Friendly, Semantic code and are Responsive using contemporary technology. Perfectionist about clean reusable code, beautiful UI design and Awesome UX";

const HomePage = () => {
  return (
    <section className="w-full relative min-h-screen overflow-hidden">
      <Meteors number={10} />

      <BallsBackground />
      <GridBackground />

      <article className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-5xl mx-auto">
          <WelcomeBadge />

          <TitleSection text="Hi I'm" highlight="𝕽𝖎𝖋𝖖𝖎 𝕾𝖞𝖓𝖞𝖘𝖙𝖊𝖗" className="text-4xl" isHeading={true} />

          <TypingEffect />

          <p className="shiny-text h2-responsive text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>

          <ActionButtons />

        </div>
      </article>

    </section>
  )
}

export default HomePage
