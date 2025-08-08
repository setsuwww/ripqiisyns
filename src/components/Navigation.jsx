import clsx from 'clsx'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { navItems } from "../constants/navItems"

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )
    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <nav className={clsx("w-full fixed top-0 z-50 transition-all duration-300", scrolled ? "glass-effect backdrop-blur-sm shadow-lg" : "bg-transparent")} data-aos="fade-down">
      <div className={clsx("max-w-7xl mx-auto transition-all duration-300", scrolled ? "p-2 lg:p-3" : "p-4 lg:p-7")}>
        <div className="flex justify-between items-center">
          <p className="font-pixel flex items-center space-x-3 font-bold">
            <img src="/pp.webp" alt="" className="size-10 object-cover lg:size-12 rounded-full" />
            <span className="text-md md:text-lg">
              Rifqi<span className="gradient-text"> Synyster</span>
            </span>
          </p>

          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={clsx("flex items-center tracking-wide rounded-lg transition-all duration-300",
                activeSection === item.href.slice(1)
                  ? "text-sky-400 font-semibold bg-sky-500/10 px-4 py-1"
                  : "text-gray-500 hover:text-gray-300"
              )}>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className={clsx("md:hidden p-2 rounded-lg transition-all",
            isOpen ? "text-rose-400 bg-rose-500/10"
              : "text-sky-400 bg-sky-500/10"
            )}
          >{isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile */}
        <AnimatePresence>
          {isOpen && (<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3, ease: "easeOut" }}
              className={clsx("md:hidden absolute left-0 right-0 z-50 backdrop-blur-sm border-b border-white/10 shadow-lg",
                "bg-gradient-to-b from-zinc-950/90 via-zinc-900/90 to-zinc-800/80",
                scrolled ? "top-14" : "top-16"
              )}
            >
              <div className="px-6 py-6 space-y-3 text-center">
                {navItems.map((item) => (<motion.a key={item.href} href={item.href} 
                  onClick={() => setIsOpen(false)} whileHover={{ scale: 1.05, x: 4 }} whileTap={{ scale: 0.95 }}
                    className={clsx("relative inline-flex items-center justify-center font-semibold text-lg tracking-wide transition-all duration-300",
                      "px-4 py-3 rounded-full group", activeSection === item.href.slice(1) ? "text-rose-300 bg-rose-500/10 shadow-inner"
                        : "text-white/80 hover:text-white"
                    )}
                  ><span className="relative z-10">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation
