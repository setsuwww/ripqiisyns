import TitleForm from './FormTitle'

import { infoList } from '../constants/infoList'

function InfoRow({ icon, label, value, color, colorHover, animation, delay }) {
  const Icon = icon;
  
  return (
    <div aria-label='Card Personal' className="group flex items-center space-x-3" data-aos={animation} data-aos-delay={delay}>
      <div className={`group p-2 rounded-full ${color} flex-shrink-0 transition-colors`}>
        <Icon className={`w-7 h-7 ${colorHover} trasition-transform duration-100 ease-in`} />
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
        <p className="text-gray-300 text-xs md:text-base">{value}</p>
      </div>
    </div>
  )
}

export default function AboutPersonal() {
  return (
    <div className="glass-effect rounded-2xl p-6" data-aos="fade-left">
      <TitleForm title="My Personal Info" />
      <div className="space-y-4">
        {infoList.map((item, i) => (
          <InfoRow key={i} {...item} />
        ))}
      </div>
    </div>
  )
}
