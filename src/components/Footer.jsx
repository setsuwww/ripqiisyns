import { Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative w-full">
      <div className="relative z-10 bg-white/5 backdrop-blur-md border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          {/* Copyright */}
          <div className="flex justify-center items-center space-x-2 text-gray-400 text-sm">
            <span>© {year}</span>
            <span className="font-medium gradient-text">Rifqi Synyster</span>
            <span>All rights reserved.</span>
          </div>

          {/* Made with love */}
          <div className="flex justify-center items-center mt-3 space-x-2 text-xs text-gray-500">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-400 animate-pulse" />
            <span>by a passionate developer</span>
          </div>

          {/* Line */}
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
          </div>
        </div>

        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
      </div>
    </footer>
  )
}
