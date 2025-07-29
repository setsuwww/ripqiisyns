import TitleForm from './TitleForm'

import { infoList } from '../constants/infoList'

function InfoRow({ icon: Icon, label, value, color, animation, delay }) {
  return (
    <div className="flex items-center space-x-3" data-aos={animation} data-aos-delay={delay}
    >
      <div className={`p-2 rounded-full bg-${color}-400/20 flex-shrink-0`}>
        <Icon className={`w-5 h-5 text-${color}-400`} />
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
    <div className="glass-effect rounded-2xl p-6" data-aos="fade-left" data-aos-duration="800">
      <TitleForm title="My Personal Info" />
      <div className="space-y-4">
        {infoList.map((item, i) => (
          <InfoRow key={i} {...item} />
        ))}
      </div>
    </div>
  )
}
