import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

function Projects() {
  const projects = [
    {
      title: 'Document Verification Pipeline',
      category: 'AI/ML',
      description: 'Production-grade document intelligence system using AWS services for automated identity verification and fraud detection.',
      tech: ['AWS Textract', 'AWS Rekognition', 'Python', 'Scikit-learn', 'Pandas'],
      highlights: [
        'Automated extraction from identity documents',
        'Face comparison and validation',
        'Confidence-threshold logic for human review',
      ],
      github: '#',
      live: '#',
      color: 'from-coral-blush/30 to-soft-pink/30',
    },
    {
      title: 'Ecosphere',
      category: 'Full Stack',
      description: 'AI-powered sustainability platform with real-time environmental tracking, carbon footprint calculator, and eco-store locator.',
      tech: ['Android', 'Java', 'REST APIs', 'Firebase', 'Chatbot Integration'],
      highlights: [
        'National Science Exhibition Winner',
        'AI-powered chatbot support',
        'Carbon footprint calculator',
        'Aligned with UN SDG goals',
      ],
      github: 'https://github.com/NikitaSharmaaa/ecosphere',
      live: '#',
      color: 'from-lavender-soft/30 to-warm-yellow/30',
    },
    {
      title: 'Traumedy',
      category: 'Web',
      description: 'Full-stack anonymous peer support platform with focus on user safety, community engagement, and accessibility.',
      tech: ['React', 'Django', 'SQLite', 'Bootstrap'],
      highlights: [
        'Anonymous sharing feature',
        'Moderation mechanisms',
        'Trust & safety systems',
        'Accessibility-focused UX',
      ],
      github: '#',
      live: '#',
      color: 'from-warm-yellow/30 to-pale-gold/30',
    },
    {
      title: 'Flolette',
      category: 'Desktop App',
      description: 'Personal health & wellness tracker with secure authentication, mood tracking, and health insights.',
      tech: ['.NET', 'C#', 'SQLite'],
      highlights: [
        'Secure user authentication',
        'Data visualization',
        'Health insights',
        'Modular architecture',
      ],
      github: 'https://github.com/NikitaSharmaaa/flollette',
      live: '#',
      color: 'from-soft-gold/30 to-dusty-gold/30',
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
    <section id="projects" className="py-24 px-4 relative">
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
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-soft-gold to-dusty-gold rounded-full mx-auto" />
            <p className="text-deep-navy/70 mt-4 max-w-2xl mx-auto">
              A selection of projects showcasing AI/ML expertise, full-stack development, and product thinking
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`glass rounded-2xl p-8 border border-white/40 bg-gradient-to-br ${project.color}`}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-soft-gold/20 text-deep-navy text-xs font-bold mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-deep-navy">{project.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-deep-navy/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, hIdx) => (
                    <motion.div
                      key={hIdx}
                      className="flex gap-2 text-sm text-deep-navy/80"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: hIdx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-soft-gold">✓</span>
                      <span>{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 rounded text-xs font-medium bg-deep-navy/10 text-deep-navy"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-white/20">
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-deep-navy hover:text-soft-gold transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub size={18} />
                    GitHub
                  </motion.a>
                  {project.live !== '#' && (
                    <motion.a
                      href={project.live}
                      className="flex items-center gap-2 text-deep-navy hover:text-soft-gold transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink size={18} />
                      Live
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
export default Projects