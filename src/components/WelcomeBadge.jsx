export default function WelcomeBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-l from-transparent to-green-500/10 glass-effect mb-8 mt-18 lg:mt-8" data-aos="zoom-out">
      <div className="relative w-3 h-3" data-aos="zoom-in">
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" />
        <div className="relative w-full h-full rounded-full bg-green-400 animate-pulse" />
      </div>
      <span className="text-sm font-semibold text-green-400">Available</span>
    </div>
  )
}
