export default function TitleSection({
  text,
  highlight,
  isHeading = false,
  className = '',
}) {
  return (
    <h1
      className={`
        font-bold mb-6 text-white ${className}
        ${isHeading
          ? 'text-5xl sm:text-6xl lg:text-7xl'
          : 'text-4xl sm:text-5xl lg:text-6xl'}
      `}
    >
      <span className="shiny-text">{text} </span>
      {highlight && <span className="gradient-text font-pirata">{highlight}</span>}
    </h1>
  );
}
