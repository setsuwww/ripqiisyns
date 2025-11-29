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
  const [formData, setFormData] = useState({ name: "", email: "", message: ""});
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
        "o-nN0BPW-JTaEyW58" ,  // Ganti dengan public key kamu
        formRef.current,
      )
      .then(() => {
        Swal.fire({ icon: "success", title: "Waww, Thankyou!", text: "I'll read ur Message, see you"})
        setFormData({ name: "", email: "", message: "" })
      })
      .catch(() => {
        Swal.fire({ icon: "error", title: "Oops, Sorry", text: "The message isn't send check your Connection"})
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <>
    <SEOHeader title="Ripsynss" description="Contact Page references" url="https://ripsynss.vercel.app" image="/pp.webp"/>
    <main className="w-full relative min-h-screen pt-20 bg-black text-white">
      <BallsBackground />
      <GridBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 sm:mb-16 px-2">
          <TitleSection text="Get" highlight="In Touch" description="Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together!"/>
        </header>

        <section className="relative px-2 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-12">
          <div className="grid gap-10 lg:gap-12">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden">

              <LinuxHeader />

              <div className="p-6 md:p-8">
                <TitleForm title="Send a Message" />

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="label">Your Name</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="input" placeholder="Dirman"/>
                    </div>

                    <div>
                      <label htmlFor="email" className="label">Email Address</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="input" placeholder="dirman@gmail.com"/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="label">Message</label>
                    <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="input" placeholder="You're free to say whatever you..."/>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="group w-full outline-offset-4 outline-1 outline-slate-500/10 ring-1 ring-gray-400/20 bg-gray-600/20 hover:ring-violet-400/20 hover:bg-radial hover:from-violet-500/10 tracking-wider font-base py-4 px-6 rounded-lg transition-colors duration-200 ease-linear flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="group-hover:text-violet-500 w-5 h-5" />
                        <span className="group-hover:text-violet-500">Send Message</span>
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
