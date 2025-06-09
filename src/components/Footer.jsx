import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full relative mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" />
        <div 
          className="absolute -bottom-32 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Glass Effect Container */}
      <div className="relative z-10 bg-white/5 backdrop-blur-md border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            {/* Copyright Text */}
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span className="text-sm">
                © {currentYear} 
              </span>
              <span className="text-sm font-medium gradient-text">
                Rifqi Synyster
              </span>
              <span className="text-sm">
                All rights reserved.
              </span>
            </div>

            {/* Made with Love */}
            <div className="flex items-center justify-center space-x-2 mt-3 text-gray-500">
              <span className="text-xs">Made with</span>
              <Heart className="w-3 h-3 text-red-400 animate-pulse" />
              <span className="text-xs">by a passionate developer</span>
            </div>

            {/* Decorative Line */}
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Bottom Glow Effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
      </div>
    </footer>
  )
}

export default Footer
