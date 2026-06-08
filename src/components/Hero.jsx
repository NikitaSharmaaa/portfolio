import { motion } from 'framer-motion'
import picture from '../assets/PICTURE.jpg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  }

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center px-4 py-12 overflow-hidden"
    >
      <motion.div
        className="max-w-6xl w-full grid md:grid-cols-2 gap-6 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image - Center for Mobile, Left for Desktop */}
        <motion.div
          className="flex justify-center order-first md:order-none"
          variants={imageVariants}
        >
          <motion.div
            className="relative"
            whileHover="hover"
            variants={imageVariants}
          >
            <div className="w-64 h-64 md:w-72 md:h-96 rounded-3xl overflow-hidden shadow-soft border-4 border-white/60">
              <img
                src={picture}
                alt="Profile"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>

            {/* Floating badges around image */}
            <motion.div
              className="absolute top-0 right-0 bg-gradient-to-br from-coral-blush to-soft-pink rounded-full px-3 py-1 text-xs font-bold text-deep-navy shadow-soft"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              AI/ML
            </motion.div>

            <motion.div
              className="absolute bottom-2 left-0 bg-gradient-to-br from-lavender-soft to-warm-yellow rounded-full px-3 py-1 text-xs font-bold text-deep-navy shadow-soft"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              DevOps
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div className="space-y-3 text-center md:text-left">
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-deep-navy"
          >
            Hi, I'm <span className="bg-gradient-to-r from-soft-gold to-dusty-gold bg-clip-text text-transparent">Nikita</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-deep-navy/80 font-light"
          >
            AI/ML Engineer | NLP Enthusiast | Cloud Computing
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-xs md:text-sm text-deep-navy/70 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            I build intelligent systems with a passion for NLP pipelines, machine learning models, and cloud-based solutions. Currently exploring AI applications that make a real impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2"
          >
            <motion.button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-soft-gold to-dusty-gold text-deep-navy font-semibold shadow-soft hover:shadow-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-soft-gold to-dusty-gold text-deep-navy font-semibold shadow-soft hover:shadow-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border-2 border-soft-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-1.5 bg-soft-gold/50 rounded-full mt-1.5 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}