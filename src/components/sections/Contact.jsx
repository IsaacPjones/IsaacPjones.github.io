import { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };


    
    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">

                <h2 className="text-6xl font-bold mb-8 bg-cyan-500 bg-clip-text text-transparent text-center"> 
                    Get In Touch
                    </h2> 
                    <form ref={form} className="space-y-6" onSubmit={handleSubmit}>

                        <div className="relative">
                        <input type="text" id="name" name="name" required value={formData.name} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:big-cyan-500/5"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Name..."
                        />
                        </div>

                        <div className="relative">
                        <input type="email" id="email" name="email" required value={formData.email} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:big-cyan-500/5"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Example@gmail.com"
                        />
                        </div>

                        <div className="relative">
                        <textarea type="message" id="message" name="message" required value={formData.message} rows={5} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:big-cyan-500/5"
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write Me A Message..."
                        />
                        </div>
                        <button type="submit" className="w-full bg-cyan-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Send Message
                        </button>
                </form>
            </div>
        </RevealOnScroll>
    </section>
}
