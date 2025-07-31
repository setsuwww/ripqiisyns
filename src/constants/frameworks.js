import { SiNextdotjs, SiNuxtdotjs, SiLaravel } from 'react-icons/si'

export const frameworks = [
  {
    Icon: SiNextdotjs,
    title: 'Nextjs',
    color: 'text-white',
    bg: 'bg-white/10',
    border: '',
    duration: 500,
    description:
      'A powerful React framework with CSR, SSR, ISR, SSG, API Routing and SEO Performance',
  },
  {
    Icon: SiNuxtdotjs,
    title: 'Nuxtjs',
    color: 'text-emerald-300',
    bg: 'bg-emerald-500/10',
    border: 'border-b-1 border-emerald-500/20',
    duration: 600,
    description:
      'Vue-based framework with SSR and SSG same as Nextjs but Vue-based.',
  },
  {
    Icon: SiLaravel,
    title: 'Laravel',
    color: 'text-red-300',
    bg: 'bg-red-500/20',
    border: 'border-b-1 border-red-500/20',
    duration: 700,
    description:
      'PHP Elegant backend framework with Blade, APIs, and Model, View, Controller Structure.',
  },
]