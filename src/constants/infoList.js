import { MapPin, GraduationCap, Calendar } from 'lucide-react'

export const infoList = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kec. Tambun Selatan, Kabupaten Bekasi, Jawa Barat 17510',
    color: 'text-yellow-400 bg-yellow-400/20',
    animation: 'fade-right',
    delay: 200,
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'SMK Telekomunikasi Telesandi Bekasi',
    color: 'text-violet-400 bg-violet-400/20',
    animation: 'fade-up',
    delay: 300,
  },
  {
    icon: Calendar,
    label: 'Status',
    value: 'Available',
    color: 'text-red-400 bg-red-400/20',
    animation: 'fade-left',
    delay: 400,
  },
]