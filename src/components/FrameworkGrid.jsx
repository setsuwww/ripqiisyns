import { SiNextdotjs, SiNuxtdotjs, SiLaravel } from 'react-icons/si'

export default function FrameworkGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
      

      <div className="glass-effect rounded-2xl p-6 flex flex-col items-start hover:bg-white/10 transition-all duration-300">
        <div className="w-12 h-12 mb-4 rounded-full bg-white/10 flex items-center justify-center">
          <SiNextdotjs className="w-8 h-8 text-white" />
        </div>
        <h4 className="text-xl font-semibold text-white mb-2">Next.js</h4>
        <p className="text-gray-400 text-sm">A powerful React framework for SSR and fullstack.</p>
      </div>

      <div className="glass-effect rounded-2xl p-6 flex flex-col items-start hover:bg-white/10 transition-all duration-300">
        <div className="w-12 h-12 mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <SiNuxtdotjs className="w-8 h-8 text-emerald-300" />
        </div>
        <h4 className="text-xl font-semibold text-white mb-2">Nuxt.js</h4>
        <p className="text-gray-400 text-sm">Vue-based framework with SSR and static gen.</p>
      </div>

      <div className="glass-effect rounded-2xl p-6 flex flex-col items-start hover:bg-white/10 transition-all duration-300">
        <div className="w-12 h-12 mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
          <SiLaravel className="w-8 h-8 text-red-300" />
        </div>
        <h4 className="text-xl font-semibold text-white mb-2">Laravel</h4>
        <p className="text-gray-400 text-sm">Elegant backend framework with Blade & APIs.</p>
      </div>
    </div>
  )
}
