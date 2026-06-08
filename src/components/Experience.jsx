import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: 'AI/ML Intern',
      company: 'Startrit',
      period: '2026 (Present)',
      type: 'Current',
      highlights: [
        'Built document verification pipeline using AWS Textract for automated extraction of structured fields',
        'Integrated AWS Rekognition for face comparison and image-based identity validation',
        'Developed ML classification models with scikit-learn and performed hyperparameter tuning',
        'Built NLP pipelines for text preprocessing, tokenization, and TF-IDF feature extraction',
        'Conducted EDA and data cleaning using Pandas and NumPy',
      ],
    },
    {
      title: 'Operations Intern',
      company: 'Dashverse',
      period: 'Nov 2025 – May 2026',
      type: 'Recent',
      highlights: [
        'Monitored digital campaign performance using data-driven KPI metrics',
        'Built structured performance reports and dashboards',
        'Identified workflow inefficiencies through data analysis',
        'Collaborated with cross-functional teams to implement process improvements',
        'Increased operational throughput through optimized workflows',
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'Varlyq Technologies',
      period: 'May – Jun 2023',
      type: 'Foundational',
      highlights: [
        'Developed RESTful backend components using Django and SQLite',
        'Implemented authentication systems and optimized database queries',
        'Improved data processing efficiency by ~30%',
        'Gained hands-on experience deploying web applications in production',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  const typeColors = {
    'Current': 'from-coral-blush to-soft-pink',
    'Recent': 'from-warm-yellow to-pale-gold',
    'Foundational': 'from-lavender-soft to-warm-yellow',
  }

  return (
    <section id="experience" className="py-24 px-4 relative">
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
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-soft-gold to-dusty-gold rounded-full mx-auto" />
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline connector */}
                {idx !== experiences.length - 1 && (
                  <div className="absolute left-5 top-24 w-1 h-16 bg-gradient-to-b from-soft-gold to-transparent" />
                )}

                <div className="flex gap-6 md:gap-8">
                  {/* Timeline dot */}
                  <motion.div
                    className={`mt-2 w-12 h-12 rounded-full bg-gradient-to-br ${typeColors[exp.type] || typeColors['Recent']} shadow-soft flex items-center justify-center text-xl font-bold text-white flex-shrink-0`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {idx + 1}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="glass rounded-2xl p-8 flex-1"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-deep-navy">{exp.title}</h3>
                        <p className="text-lg text-soft-gold font-semibold">{exp.company}</p>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${typeColors[exp.type] || typeColors['Recent']} w-fit`}>
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, hIdx) => (
                        <motion.li
                          key={hIdx}
                          className="flex gap-3 text-deep-navy/80"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: hIdx * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-soft-gold font-bold mt-0.5">•</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}