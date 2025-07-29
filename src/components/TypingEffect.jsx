import { Typewriter } from 'react-simple-typewriter'

export default function TypingEffect() {
  return (
    <p className="typing-font text-lg">
      <Typewriter words={[
          'Fullstack Developer',
          'UI/UX Designer',
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
