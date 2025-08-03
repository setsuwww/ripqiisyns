import BallsBackground from "../components/SoftGradients"
import TypingEffect from "../components/ProfessionTyping"
import GridBackground from "../components/GridBackground"
import TitleSection from "../components/PageTitle"
import WelcomeBadge from "../components/WelcomeBadge"
import { Meteors } from "../components/magicui/meteors"
import ActionButtons from "../components/ActionButton"

import SEOHeader from "../components/SEO/SEOHeader"

const description = "I create modern web applications, SEO friendly, semantic code, and responsive designs using contemporary technology. Perfectionist about clean reusable code, beautiful UI design, and awesome UX."

const HomePage = () => {
  return (
    <>
      <SEOHeader
        title="Rifqi Synyster"
        description={description}
        url="https://ripqiisyns.vercel.app"
        image="/pp.jpg"
      />

      <section className="w-full relative min-h-screen overflow-hidden">
        <Meteors number={10} />
        <BallsBackground />
        <GridBackground />

        <main className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center max-w-5xl mx-auto">
            <WelcomeBadge />

            <header>
              <TitleSection text="Hi I'm" highlight="Rifqi Synyster" isHeading={true} />
              <TypingEffect />
            </header>

            <section aria-label="Description" className="mt-6">
              <p className="shiny-text text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            </section>

            <nav aria-label="Call to action buttons">
              <ActionButtons />
            </nav>
          </div>
        </main>
      </section>
    </>
  )
}

export default HomePage
