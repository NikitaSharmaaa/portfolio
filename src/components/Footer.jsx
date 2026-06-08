import { motion } from 'framer-motion'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-soft-gold/20 bg-gradient-to-b from-transparent to-soft-gold/5">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-deep-navy/70">
            <span className="font-semibold">Crafted with</span>
            <span className="mx-2">💛</span>
            <span className="font-semibold">by Nikita Sharma</span>
          </p>
          
          <p className="text-sm text-deep-navy/60">
            AI Engineer • NLP Enthusiast • Creative Coder
          </p>

          <div className="flex justify-center gap-3 text-deep-navy/60 text-xs">
            <span>© {currentYear}</span>
            <span>•</span>
            <a 
              href="https://github.com/NikitaSharmaaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-soft-gold transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a 
              href="https://www.linkedin.com/in/nikita-sharma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-soft-gold transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a 
              href="mailto:nikitasharma16016@gmail.com"
              className="hover:text-soft-gold transition-colors"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
export default Footer