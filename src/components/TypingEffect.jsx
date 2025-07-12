import { Typewriter } from 'react-simple-typewriter'
import "../App.css"

export default function TypingEffect() {
  return (
    <p
      className="typing-font"
      data-aos="flip-up"
      data-aos-duration="1000"
    >
      <Typewriter
        words={[
          'Fullstack Developer',
          'UI/UX Designer',
          'Nextjs, Nuxtjs & Laravel Expert',
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
