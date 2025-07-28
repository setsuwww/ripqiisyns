import { SiNextdotjs, SiNuxtdotjs, SiLaravel } from 'react-icons/si'

export default function FrameworkGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
      
      <div data-aos="zoom-in" data-aos-duration={500} className="glass-effect rounded-2xl p-6 flex flex-col items-start hover:bg-white/10 transition-all duration-300">
        <div className="w-12 h-12 mb-4 rounded-full bg-white/10 flex items-center justify-center">
          <SiNextdotjs className="w-8 h-8 text-white" />
        </div>
        <h4 className="font-pixel text-2xl font-semibold text-white mb-2">Next.js</h4>
        <p className="text-gray-400 text-sm">A powerful React framework with CSR, SSR, ISR, SSG, API Routing and SEO Performance</p>
      </div>

      <div data-aos="zoom-in" data-aos-duration={600} className="glass-effect border-0 border-b-1 border-emerald-500/20 rounded-2xl p-6 flex flex-col items-start hover:bg-white/10 transition-all duration-300">
        <div className="w-12 h-12 mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <SiNuxtdotjs className="w-8 h-8 text-emerald-300" />
        </div>
        <h4 className="font-pixel text-2xl font-semibold text-emerald-300 mb-2">Nuxt.js</h4>
        <p className="text-gray-400 text-sm">Vue-based framework with SSR and SSG same as Nextjs but Vue-based.</p>
      </div>

      <div data-aos="zoom-in" data-aos-duration={700} className="glass-effect border-0 border-b-1 border-red-500/20 rounded-2xl p-6 flex flex-col items-start hover:bg-white/10 transition-all duration-300">
        <div className="w-12 h-12 mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
          <SiLaravel className="w-8 h-8 text-red-300" />
        </div>
        <h4 className="font-pixel text-2xl font-semibold text-red-300 mb-2">Laravel</h4>
        <p className="text-gray-400 text-sm">PHP Elegant backend framework with Blade, APIs, and Model, View, Controller Structure.</p>
      </div>
    </div>
  )
}
