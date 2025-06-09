import { useState, useEffect } from "react"
import { Menu, X, Home, User, Briefcase, Code, Mail } from "lucide-react"
import { useLocation } from "react-router-dom"
import '../App.css'

const Navigation = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#portofolio", label: "Portfolio", icon: Briefcase },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#contact", label: "Contact", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
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
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-effect shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <p className="flex items-center space-x-2 text-2xl font-bold">
              <img src="/pp.jpg" alt="" className="size-10 object-cover lg:size-12 rounded-full" />
              <span>Rifqi <span className="gradient-text">Synyster</span></span>
            </p>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 ${activeSection === item.href.slice(1) ? "text-yellow-400 bg-white/5" : "text-gray-500 hover:text-yellow-400"
                      }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </a>
                )
              })}
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-white/10 rounded-br-full">
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`w-1/2 flex items-center font-semibold space-x-2 px-4 py-3 transition-all duration-300 border-0 border-l-4 border-transparent rounded-r-full ${activeSection === item.href.slice(1)
                        ? "text-yellow-400"
                        : "text-gray-500 hover:bg-yellow-100 hover:text-yellow-800 hover:border-yellow-400 cursor-pointer"
                        }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

    </>
  )
}

export default Navigation
