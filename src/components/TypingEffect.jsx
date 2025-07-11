import { Typewriter } from 'react-simple-typewriter'

export default function TypingEffect() {
  return (
    <p
      className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light"
      data-aos="flip-up"
      data-aos-duration="1000"
    >
      <Typewriter
        words={[
          'Fullstack Developer & UI/UX Designer',
          'Javascript expert especially Nextjs and Nuxtjs',
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </p>
  )
}
