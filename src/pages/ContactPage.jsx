import { useState } from "react"
import { Mail, Phone, MapPin, Send, Instagram, Github, Linkedin, Twitter } from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Message sent successfully!")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "baimrifqi1@gmail.com",
      href: "mailto:baimrifqi1@gmail.com",
      color: "text-yellow-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62814 0177 9390",
      href: "tel:+6281401779390",
      color: "text-violet-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bekasi, Indonesia",
      href: "#",
      color: "text-red-400",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-yellow-400" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-sky-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-red-400" },
  ]

  return (
    <div className="relative min-h-screen pt-20 pb-16">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl floating-animation" />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing
            together!
          </p>
        </div>



        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-bold gradient-text mb-6">Send Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-violet-500 hover:from-yellow-500 hover:to-violet-600 text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Contact Information</h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                    >
                      <div
                        className={`p-3 rounded-full bg-white/10 ${info.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Follow Me</h2>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-4 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 group ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-bold gradient-text mb-6">Availability</h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="relative w-3 h-3">
                    <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-75 animate-ping" />
                    <div className="relative w-full h-full rounded-full bg-yellow-400 animate-pulse" />
                  </div>
                  <span className="text-gray-300">Available for freelance projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative w-3 h-3">
                    <div className="absolute inset-0 rounded-full bg-violet-400 opacity-75 animate-ping" />
                    <div className="relative w-full h-full rounded-full bg-violet-400 animate-pulse" />
                  </div>
                  <span className="text-gray-300">Open to full-time opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative w-3 h-3">
                    <div className="absolute inset-0 rounded-full bg-red-400 opacity-75 animate-ping" />
                    <div className="relative w-full h-full rounded-full bg-red-400 animate-pulse" />
                  </div>
                  <span className="text-gray-300">Response time: 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
