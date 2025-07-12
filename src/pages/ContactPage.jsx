import emailjs from "@emailjs/browser"
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Github, Linkedin, Twitter, Section } from "lucide-react"
import Swal from "sweetalert2";

import BallsBackground from "../components/Balls";
import GridBackground from "../components/GridBackground";
import TitleForm from "../components/TitleForm";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .sendForm(
        "service_bf2o4rb",     // Ganti ini dari EmailJS dashboard
        "template_mg74d3b",    // Ganti ini juga
        formRef.current,
        "o-nN0BPW-JTaEyW58"      // Ganti dengan public key kamu
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Waww Apatuchh!",
          text: "Pesannya nanti gw baca, gw kan ga Seleb",
        })
        setFormData({ name: "", email: "", message: "" })
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Gagal, Error Cik",
          text: "Pesannya gagal dikirim.",
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
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
      href: "https://www.google.com/maps/place/Cluster+Platinum+Sumber+Jaya+Tambun+Selatan/@-6.2302738,107.0695519,17z/data=!3m1!4b1!4m6!3m5!1s0x2e698f9e8822eb15:0x190a2c813a4e41d5!8m2!3d-6.2302738!4d107.0721268!16s%2Fg%2F11fmdrw9j2?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D",
      color: "text-red-400",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/setsuwww", label: "GitHub", color: "hover:text-yellow-400" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/iam_synyster?igsh=MW40ZHJqYmJ5aF30Q==",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-sky-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
  ]

  return (
    <div className="w-full relative min-h-screen pt-20 pb-16 bg-black text-white">
      {/* Background Effects */}
      <BallsBackground />
      <GridBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get {" "}
            <span className="bg-gradient-to-r from-yellow-400 to-violet-500 bg-clip-text text-transparent">𝕴𝖓 𝕿𝖔𝖚𝖈𝖍</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing
            together!
          </p>
        </div>

        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
              <TitleForm title="Send a Message"/>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                      placeholder="Dirman Soebardjo"
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
                      placeholder="dirman@example.com"
                    />
                  </div>
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
                    placeholder="You're free to say whatever you..."
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
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl max-w-md w-full mx-auto">
                <TitleForm title="Contact Information" className="p-6"/>

                {/* Content */}
                <div className="px-6 sm:px-8 pb-8 pt-4 space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <a key={index} href={info.href} className="flex items-center space-x-4 p-2 rounded-lg transition-all duration-300 group" >
                        <div className={`p-3 rounded-full bg-white/10 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
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
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
                <TitleForm title="Follow Me"/>

                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 group ${social.color}`}
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    )
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactPage
