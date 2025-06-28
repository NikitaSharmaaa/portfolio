import { FaLinkedin, FaGithub, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-r from-black to-[#4B0000] text-white px-6 py-20">
      <h2 className="text-4xl font-semibold text-center mb-12 border-b-2 border-maroon inline-block">Contact Me</h2>

      {/* Contact Icons */}
      <div className="flex flex-col items-center gap-6 mb-12">
        <p className="text-gray-300 text-lg">Let's connect:</p>
        <div className="flex gap-6 text-2xl2">
          <a href="mailto:nikitasharma16016@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-maroon">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-maroon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/NikitaSharmaaa" target="_blank" rel="noopener noreferrer" className="hover:text-maroon">
            <FaGithub />
          </a>
         
        </div>
      </div>

      {/* Contact Form */}
      <form action="https://formsubmit.co/nikitasharma16016@gmail.com" method="POST" className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-black/30 text-white border border-white/10 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-black/30 text-white border border-white/10 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-3 rounded bg-black/30 text-white border border-white/10 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#4B0000] to-black text-white py-2 rounded hover:opacity-90"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
