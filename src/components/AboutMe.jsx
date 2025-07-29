import TitleForm from "./TitleForm"

export default function AboutSection() {
  return (
    <section className="glass-effect rounded-2xl p-6 md:p-8" data-aos="fade-left">
      <TitleForm title="Did U Know me?" />

      <div className="shiny-text space-y-3 md:space-y-4 text-xs md:text-base leading-relaxed">
        <p>
          I'm Rifqi Ibrahim, a passionate fullstack developer
          currently studying at SMK Telekomunikasi Telesandi Bekasi. My journey in web development started
          with curiosity about how websites work.
        </p>
        <p>
          I specialize in modern web technologies like{" "}
          Next.js SEO performance in mind,
          and I'm also proficient in Nuxt.js SSR Performance and
          Laravel with Inertiajs.
        </p>
        <p>
          Outside of coding, I enjoy drawing, writing, and playing guitar—
          I wanna be like my idol, Synyster Gates.
        </p>
      </div>
    </section>
  )
}
