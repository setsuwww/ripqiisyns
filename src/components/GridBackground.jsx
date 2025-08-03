import React from 'react'

const GridBackground = () => {
  return (
    <div className="
        absolute inset-0 animate-grid bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] 
        bg-[size:50px_50px] 
      " aria-hidden="true"
    />
  )
}

export default React.memo(GridBackground)
