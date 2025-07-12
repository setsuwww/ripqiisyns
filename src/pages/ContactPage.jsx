import emailjs from "@emailjs/browser"
import { useRef, useState } from "react";
import { Send } from "lucide-react"
import Swal from "sweetalert2";

import BallsBackground from "../components/Balls";
import GridBackground from "../components/GridBackground";
import TitleForm from "../components/TitleForm";
import LinuxHeader from "../components/LinuxHeader";

import { contactInfo } from "../constants/contactInfo";
import { socialLinks } from "../constants/socialLinks";

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

  return (
    <div className="w-full relative min-h-screen pt-20 pb-16 bg-black text-white">
      <BallsBackground />
      <GridBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 sm:mb-16 px-2">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Get <span className="bg-gradient-to-r from-yellow-400 to-violet-500 bg-clip-text text-transparent">𝕴𝖓 𝕿𝖔𝖚𝖈𝖍</span>
          </h1>
          <p className="h2-responsive text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together!
          </p>
        </header>

        <section className="px-2 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden">

              <LinuxHeader />

              <div className="p-6 md:p-6">
                <TitleForm title="Send a Message" />

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="Dirman Soebardjo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400/50 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="dirman@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300"
                      placeholder="You're free to say whatever you..."
                    />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-yellow-400 to-violet-500 hover:from-yellow-500 hover:to-violet-600 text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
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
            </div>


            {/* Contact Info + Socials */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl max-w-full w-full mx-auto p-6 sm:p-6">
                <TitleForm title="Contact Information" />

                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <a key={index} href={info.href} className="flex items-center space-x-4 p-2 rounded-lg transition-all duration-300 group">
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
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
                <TitleForm title="Follow Me" />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-2">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a key={index} href={social.href} aria-label={social.label} className={`p-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 group ${social.color}`}>
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
