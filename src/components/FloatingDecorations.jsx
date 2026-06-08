import { motion } from 'framer-motion'

function FloatingDecorations() {
  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 3,
  }))

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    emoji: ['✨', '⭐', '🌟', '💫', '✦', '◆', '★', '✧'][i],
    x: Math.random() * 90 + 5,
    y: Math.random() * 90 + 5,
    delay: Math.random() * 5,
  }))

  return (
    <>


      {/* Floating Stars */}
      {floatingElements.map((element) => (
        <motion.div
          key={`float-${element.id}`}
          className="fixed text-3xl pointer-events-none"
          style={{ left: `${element.x}%`, top: `${element.y}%` }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {element.emoji}
        </motion.div>
      ))}

      {/* Sparkle particles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="fixed w-2 h-2 bg-soft-gold rounded-full pointer-events-none"
          style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%` }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle animated gradient overlay */}

    </>
  )
}
export default FloatingDecorations