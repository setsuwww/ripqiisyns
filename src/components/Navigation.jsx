import { useState, useEffect } from "react"
import { Menu, X, Home, User, Briefcase, Code, Mail } from "lucide-react"
import '../App.css'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? "glass-effect shadow-lg" : "bg-transparent"}`}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className={`max-w-7xl mx-auto transition-all duration-300 ${scrolled ? 'p-2 lg:p-3' : 'p-5 lg:p-6'}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <p className="flex items-center space-x-3 font-bold">
            <img src="/pp.jpg" alt="" className="size-10 object-cover lg:size-12 rounded-full"/>
            <span className="text-xl md:text-2xl">
              𝕽𝖎𝖋𝖖𝖎<span className="gradient-text"> 𝕾𝖞𝖓𝖞𝖘𝖙𝖊𝖗</span>
            </span>
          </p>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => {
              return (
                <a key={item.href} href={item.href}
                  className={`flex items-center tracking-wide rounded-lg transition-all duration-300 ${activeSection === item.href.slice(1)
                    ? "text-yellow-400"
                    : "text-gray-500 hover:text-gray-300"
                    }`}
                >
                  <span>{item.label}</span>
                </a>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden absolute top-16 left-0 right-0 bg-white border-t border-white/10 rounded-bl-full shadow-md overflow-hidden z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="px-4 py-4 space-y-2 text-right">
              {navItems.map((item) => {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex justify-end items-center font-semibold space-x-2 px-4 py-3 transition-all duration-300 border-0 border-r-4 border-transparent rounded-l-full ${activeSection === item.href.slice(1)
                        ? 'text-yellow-400'
                        : 'text-gray-500 cursor-pointer hover:text-yellow-500'
                      }`}
                  >
                    <div className="flex items-center">
                      <span className="text-right w-full">{item.label}</span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
