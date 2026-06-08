import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function FloatingNav({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home'},
    { id: 'about', label: 'About'},
    { id: 'skills', label: 'Skills'},
    { id: 'experience', label: 'Experience'},
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certs' },
    { id: 'achievements', label: 'Awards'},
    { id: 'contact', label: 'Contact'},
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }))

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(section.id)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden bg-gradient-to-br from-soft-gold to-dusty-gold text-deep-navy p-3 rounded-full shadow-soft hover:shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </motion.button>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 right-6 z-40 lg:hidden bg-white/80 backdrop-blur-xl rounded-3xl shadow-soft border border-warm-yellow/50 p-3"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all text-center whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-soft-gold to-dusty-gold text-deep-navy'
                    : 'text-deep-navy hover:bg-warm-yellow/30'
                }`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Desktop Floating Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-white/70 backdrop-blur-xl rounded-full shadow-soft border border-warm-yellow/50 px-3 py-2 gap-1"
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
              activeSection === item.id
                ? 'bg-gradient-to-r from-soft-gold to-dusty-gold text-deep-navy'
                : 'text-deep-navy hover:bg-warm-yellow/40'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
          </motion.button>
        ))}
      </motion.nav>
    </>
  )
}