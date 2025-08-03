import TitleForm from "./FormTitle"

import { aboutParagraphs } from "@/constants/aboutParagraphs"

export default function AboutSection() {
  return (
    <section className="glass-effect rounded-2xl p-6 md:p-8" data-aos="fade-left">
      <TitleForm title="Did U Know me?" />

      <article className="shiny-text space-y-4 leading-relaxed">
        {aboutParagraphs.map((text, index) => (
          <p key={index} className="text-sm">
            {text}
          </p>
        ))}
      </article>
    </section>
  )
}
