export default function TitleSection({ text, highlight, aos = 'zoom-in', aosDuration = '2000', className = '', }) {
  return (
    <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight ${className}`}
      data-aos={aos}
      data-aos-duration={aosDuration}
    >
      <span className="shiny-text">{text}{' '}</span>
      {highlight && <span className="gradient-text font-pirata">{highlight}</span>}
    </h1>
  )
}
