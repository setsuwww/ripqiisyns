import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"

export default function ActionButtons() {
  return (
    <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
      {/* View My Work Button */}
      <motion.a href="#portofolio" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 border-0 border-b-2 border-sky-100 hover:border-transparent text-black font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 flex items-center">
        View My Work
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.a>

      {/* Get In Touch Button */}
      <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group relative px-8 py-4 rounded-full text-violet-300 font-semibold border-b-2 border-violet-800 hover:border-violet-400 group overflow-hidden z-10 bg-gradient-to-b from-transparent via-transparent to-transparent hover:via-violet-300/10 hover:to-violet-500/20">
        <span className="relative z-10 flex items-center">
          <Mail className="group-hover:scale-125 transform transition-transform mr-2 w-5 h-5" />
          Get In Touch
        </span>
        <span className="absolute inset-0 rounded-full border-2 border-transparent pointer-events-none z-0 shine-border"></span>
      </motion.a>
    </motion.div>
  )
}
