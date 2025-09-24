import React, { useMemo } from "react"
import { frameworks } from "../constants/frameworks"

const FrameworkGrid = () => {
  const renderedFrameworks = useMemo(
    () => frameworks.map(({ Icon, title, color, bg, border, description }) => (
          <div key={title} className={`glass-effect relative rounded-2xl p-6 flex flex-col items-start hover:bg-zinc-500/10 border-b-0 border-l-2 hover:border-l-4 ${border} transition-all duration-100 ease-in`}>
            <div className={`w-12 h-12 mb-4 rounded-full ${bg} flex items-center justify-center`}>
              <Icon className={`w-8 h-8 ${color}`} />
            </div>
            <h4 className={`font-pixel text-lg font-semibold mb-2 ${color}`}>{title}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        )
      ),
    [frameworks]
  )
  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">{renderedFrameworks}</div>
}

export default React.memo(FrameworkGrid)
