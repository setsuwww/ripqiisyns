import React from "react"

const SkillBar = ({ name, nameSingkat, level, color }) => {
  return (
    <div className="glass-effect rounded-2xl p-6 hover:border-gray-500/50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="md:hidden font-pixel text-base font-semibold text-white">{nameSingkat ?? name}</h3>
        <h3 className="hidden md:inline font-pixel text-base font-semibold text-white">{name}</h3>
        <span className="text-sm font-medium text-gray-400">{level}%</span>
      </div>

      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${color} rounded-full`} style={{ width: `${level}%`}}/>
      </div>
    </div>
  )
}

export default React.memo(SkillBar)
