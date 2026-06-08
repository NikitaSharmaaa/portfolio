import { motion } from 'framer-motion'

function Achievements() {
  const achievements = [
    {
      title: 'National Science Exhibition Winner',
      organization: 'National Level',
      description: 'Won recognition for the Ecosphere App — an AI-powered sustainability platform with chatbot, carbon footprint calculator, and eco-store locator aligned with UN SDG goals.',
      icon: '🏆',
      year: '2024',
    },
    {
      title: 'Research Presentation',
      organization: 'ICCICT-2026',
      description: 'Presented NLP research on "Exploring Philosophical and Ideological Dimensions in Melancholic Instagram Comments: A Mixed-Methods Text Analytics Approach"',
      icon: '📊',
      year: '2026',
    },
    {
      title: 'Student Council Member',
      organization: 'Christ University',
      description: 'Represented student body in academic coordination with faculty; co-organized university flagship events including Gratitude Day and Daksh.',
      icon: '👥',
      year: '2024-2025',
    },
    {
      title: 'CCA Volunteer',
      organization: 'Christ University',
      description: 'Led sustainability drives (sapling distribution, awareness campaigns); assisted in event coordination and crowd management.',
      icon: '🌱',
      year: '2024',
    },
  ]

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
    <section id="achievements" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
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
              Achievements & Recognition
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-soft-gold to-dusty-gold rounded-full mx-auto" />
            <p className="text-deep-navy/70 mt-4 max-w-2xl mx-auto">
              Highlights of recognition, leadership, and contributions to the community
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-8 border border-white/40"
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-deep-navy">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-soft-gold font-semibold">
                      {achievement.organization}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-soft-gold/20 text-deep-navy text-xs font-bold whitespace-nowrap">
                    {achievement.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-deep-navy/80 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Extra Stats */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 border border-white/40">
            <h3 className="text-2xl font-bold text-deep-navy mb-6 text-center">
              Impact & Involvement
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-soft-gold to-dusty-gold bg-clip-text text-transparent mb-2">
                  1
                </div>
                <p className="text-deep-navy/70">National Award</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-coral-blush to-soft-pink bg-clip-text text-transparent mb-2">
                  1
                </div>
                <p className="text-deep-navy/70">Research Presentation</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-lavender-soft to-warm-yellow bg-clip-text text-transparent mb-2">
                  2+
                </div>
                <p className="text-deep-navy/70">Internship Experiences</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
export default Achievements