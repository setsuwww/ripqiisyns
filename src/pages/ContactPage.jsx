import emailjs from "@emailjs/browser"
import { useRef, useState } from "react";
import { Send } from "lucide-react"
import Swal from "sweetalert2";

import BallsBackground from "../components/SoftGradients";
import GridBackground from "../components/GridBackground";
import TitleForm from "../components/FormTitle";
import LinuxHeader from "../components/LinuxHeader";
import TitleSection from "../components/PageTitle"

import SEOHeader from "@/components/SEO/SEOHeader";

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
          title: "Waww, Thankyou!",
          text: "I'll read ur Message, see you",
        })
        setFormData({ name: "", email: "", message: "" })
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops, Sorry",
          text: "The message isn't send check your Connection",
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <>
    <SEOHeader 
      title="Rifqi Synyster"
      description="Contact Page references"
      url="https://ripqiisyns.vercel.app"
      image="/pp.jpg"
    />
    <main className="w-full relative min-h-screen pt-20 bg-black text-white">
      <BallsBackground />
      <GridBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 sm:mb-16 px-2">
          <TitleSection text="Get" highlight="In Touch" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"/>
          <p className="h2-responsive text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together!
          </p>
        </header>

        <section className="relative px-2 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-12">
          <div className="grid gap-10 lg:gap-12">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden">

              <LinuxHeader />

              <div className="p-6 md:p-10">
                <TitleForm title="Send a Message" />

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                        className="input"
                        placeholder="Dirman"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                        className="input"
                        placeholder="dirman@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange}
                      className="input"
                      placeholder="You're free to say whatever you..."
                    />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-gray-500/20 hover:bg-gray-500/30 font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
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

          </div>
        </section>
      </div>
    </main>
    </>
  )
}

export default ContactPage
