import { SiNextdotjs, SiNuxtdotjs, SiLaravel } from 'react-icons/si'

export const frameworks = [
  {
    Icon: SiNextdotjs,
    title: 'Nextjs',
    color: 'text-white',
    bg: 'bg-gradient-to-br from-white/10 to-white/5 border-l-2 border-white/70',
    border: 'hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent border-white/20 hover:border-white/40',
    description:
      'A powerful React framework with CSR, SSR, ISR, SSG, API Routing and SEO Performance',
  },
  {
    Icon: SiNuxtdotjs,
    title: 'Nuxtjs',
    color: 'text-emerald-300',
    bg: 'bg-gradient-to-br from-emerald-500/10 to-emerald-700/10 border-l-2 border-emerald-500',
    border: 'hover:bg-gradient-to-br hover:from-emerald-500/5 hover:to-transparent border-emerald-500/20 hover:border-emerald-500/40',
    description:
      'Vue-based framework with SSR and SSG same as Nextjs but Vue-based.',
  },
  {
    Icon: SiLaravel,
    title: 'Laravel',
    color: 'text-red-300',
    bg: 'bg-gradient-to-br from-red-500/20 to-red-700/10 border-l-2 border-red-500',
    border: 'hover:bg-gradient-to-br hover:from-red-500/5 hover:to-transparent border-red-500/20 hover:border-red-500/40',
    description:
      'PHP Elegant backend framework with Blade, APIs, and Model, View, Controller Structure.',
  },
]