import React from "react"

const TitleSection = ({
  text,
  highlight,
  isHeading = false,
  description = "", // default kosong, opsional
}) => {
  return (
    <>
      <h1 className={`font-extrabold mb-6 text-white
        ${isHeading
          ? "text-5xl sm:text-6xl lg:text-7xl"
          : "text-4xl sm:text-5xl lg:text-6xl"}
        `} data-aos = "zoom-in"
      >
        <span className="shiny-text">{text} </span>
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h1>

      {description && (
        <p className="h2-responsive text-gray-400 max-w-3xl mx-auto" data-aos="zoom-out">
          {description}
        </p>
      )}
    </>
  )
}

export default React.memo(TitleSection)
