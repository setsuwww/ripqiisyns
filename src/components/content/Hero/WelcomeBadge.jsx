export default function WelcomeBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-gradient-to-l from-transparent to-green-400/15 glass-effect mb-8 mt-18 lg:mt-8">
      <div className="relative w-2.5 h-2.5" data-aos="zoom-in">
        <div className="absolute inset-0 rounded-full bg-green-400/40 opacity-75 animate-ping" />
        <div className="relative w-full h-full rounded-full bg-green-400 animate-pulse" />
      </div>
      <span className="text-sm font-semibold text-green-400">Fullstack Developer</span>
    </div>
  )
}
