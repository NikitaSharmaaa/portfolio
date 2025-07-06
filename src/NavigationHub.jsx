import { motion } from 'framer-motion'
import profilePic from './assets/profile.jpg'
const navItems = [
  { id: 'about', label: 'About', direction: 'left' },
  { id: 'projects', label: 'Projects', direction: 'bottom' },
  { id: 'certifications', label: 'Certifications', direction: 'right' },
  { id: 'contact', label: 'Contact', direction: 'top' },
]

const getAnimation = (direction) => {
  const from = {
    top: { y: -100, opacity: 0 },
    bottom: { y: 100, opacity: 0 },
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
  }
  return {
    initial: from[direction],
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { duration: 1, ease: 'easeOut' },
  }
}

export default function NavigationHub() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Profile Pic */}
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-40 h-40 object-cover rounded-full border-4 border-maroon shadow-xl z-10"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Nav Cards */}
      {navItems.map(({ id, label, direction }) => (
        <motion.a
          key={id}
          href={`#${id}`}
          className={`absolute bg-gradient-to-br from-maroon to-black text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform font-medium`}
          style={{
            top: direction === 'top' ? '5%' : direction === 'bottom' ? '85%' : '50%',
            left: direction === 'left' ? '10%' : direction === 'right' ? '85%' : '50%',
            transform: 'translate(-50%, -50%)',
          }}
          {...getAnimation(direction)}
        >
          {label}
        </motion.a>
      ))}
    </section>
  )
}
