import { MapPin, GraduationCap, Calendar } from 'lucide-react'

export const infoList = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kec. Tambun Selatan, Kabupaten Bekasi, Jawa Barat 17510',
    color: 'text-sky-400 bg-sky-400/20 group-hover:bg-sky-400/5',
    colorHover: 'group-hover:text-sky-300 group-hover:drop-shadow-[0_0_4px_oklch(89.4%_0.058_230.902)]',
    animation: 'fade-down',
    delay: 200,
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'SMK Telekomunikasi Telesandi Bekasi',
    color: 'text-violet-400 bg-violet-400/20',
    colorHover: 'group-hover:text-violet-300 group-hover:drop-shadow-[0_0_4px_oklch(89.4%_0.057_293.283)]',
    animation: 'fade-down',
    delay: 300,
  },
  {
    icon: Calendar,
    label: 'Status',
    value: 'Available',
    color: 'text-rose-400 bg-rose-400/20',
    colorHover: 'group-hover:text-rose-300 group-hover:drop-shadow-[0_0_4px_oklch(89.2%_0.058_10.001)]',
    animation: 'fade-down',
    delay: 400,
  },
]