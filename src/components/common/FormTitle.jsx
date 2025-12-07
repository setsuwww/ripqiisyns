import React from "react"

const TitleForm = ({ title, className = "" }) => {
  return (
    <h2 className={`${className} text-lg md:text-lg font-bold gradient-text mb-6`}>
      {title}
    </h2>
  )
}

export default React.memo(TitleForm)
