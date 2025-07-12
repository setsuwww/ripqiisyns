import { MapPin, GraduationCap, Calendar } from 'lucide-react'

import TitleForm from './TitleForm'

export default function AboutPersonal() {
  return (
    <div className="glass-effect rounded-2xl p-6" data-aos="fade-left" data-aos-duration="800">
      <TitleForm title="Personal Info" />

      <div className="space-y-4">
        <div className="flex items-center space-x-3" data-aos="fade-right" data-aos-delay="200">
          <div className="p-2 rounded-full bg-yellow-400/20 flex-shrink-0">
            <MapPin className="w-5 h-5 text-yellow-400" />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
            <p className="text-gray-300 text-xs md:text-base">
              Jl. Kp. Pulo, Sumberjaya, Kec. Tambun Selatan, Kabupaten Bekasi, Jawa Barat 17510
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3" data-aos="fade-up" data-aos-delay="300">
          <div className="p-2 rounded-full bg-violet-400/20 flex-shrink-0">
            <GraduationCap className="w-5 h-5 text-violet-400" />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Education</p>
            <p className="text-gray-300 text-xs md:text-base">SMK Telekomunikasi Telesandi Bekasi</p>
          </div>
        </div>

        <div className="flex items-center space-x-3" data-aos="fade-left" data-aos-delay="400">
          <div className="p-2 rounded-full bg-red-400/20 flex-shrink-0">
            <Calendar className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Status</p>
            <p className="text-gray-300 text-xs md:text-base">Available for opportunities</p>
          </div>
        </div>
      </div>
    </div>
  )
}
