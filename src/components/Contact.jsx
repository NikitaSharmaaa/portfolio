import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const socialLinks = [
    {
      label: 'Email',
      url: 'mailto:nikitasharma16016@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-coral-blush',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nikita-sharma-ai-ml/',
      icon: FaLinkedin,
      color: 'hover:text-soft-gold',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/NikitaSharmaaa',
      icon: FaGithub,
      color: 'hover:text-dusty-gold',
    },
    {
      label: 'Phone',
      url: 'tel:+918219526626',
      icon: FaPhone,
      color: 'hover:text-lavender-soft',
    },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // FormSubmit.co integration
    const form = e.target
    form.submit()
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-deep-navy mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-soft-gold to-dusty-gold rounded-full mx-auto" />
            <p className="text-deep-navy/70 mt-4 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and collaborating on exciting projects. Reach out!
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-8">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={idx}
                  href={social.url}
                  target={social.label !== 'Email' && social.label !== 'Phone' ? '_blank' : undefined}
                  rel={social.label !== 'Email' && social.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                  className={`text-3xl text-deep-navy transition-colors ${social.color}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <Icon />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 md:p-12 border border-white/40">
            <form
              action="https://formsubmit.co/nikitasharma16016@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Name */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block text-deep-navy font-semibold">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/40 border border-white/60 text-deep-navy placeholder-deep-navy/40 focus:outline-none focus:border-soft-gold focus:bg-white/60 transition-all"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block text-deep-navy font-semibold">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/40 border border-white/60 text-deep-navy placeholder-deep-navy/40 focus:outline-none focus:border-soft-gold focus:bg-white/60 transition-all"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block text-deep-navy font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows="6"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/40 border border-white/60 text-deep-navy placeholder-deep-navy/40 focus:outline-none focus:border-soft-gold focus:bg-white/60 transition-all resize-none"
                />
              </motion.div>

              {/* Hidden Fields for FormSubmit.co */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://nikitasharmaaa.github.io/portfolio/"
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-soft-gold to-dusty-gold text-deep-navy font-bold shadow-soft hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                Send Message ✨
              </motion.button>
            </form>
          </motion.div>

          {/* Footer Info */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-deep-navy/70 mb-4">
              Or reach out directly at{' '}
              <motion.a
                href="mailto:nikitasharma16016@gmail.com"
                className="text-soft-gold font-semibold hover:text-dusty-gold transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                nikitasharma16016@gmail.com
              </motion.a>
            </p>
            <p className="text-deep-navy/70 mb-8">
              📞 +91 8219526626
            </p>
            <div className="text-deep-navy/60 text-sm">
              <p>Based in Himachal Pradesh, India 🇮🇳</p>
              <p className="mt-2">Always open to collaborations and new opportunities!</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}