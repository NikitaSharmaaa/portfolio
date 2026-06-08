import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

export default function Certifications() {
  const certifications = [
    {
      title: 'IBM Full Stack Developer Professional Certificate',
      issuer: 'IBM',
      date: '2025',
      description: 'Front-end, back-end, APIs, databases, deployment',
      url: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/GHXUP03DVOQ4',
      icon: '🏢',
    },
    {
      title: 'AWS Cloud Foundations',
      issuer: 'AWS Training',
      date: '2025',
      description: 'Core AWS services, cloud architecture, security, pricing',
      url: '#',
      icon: '☁️',
    },
    {
      title: 'Google Cloud Career Launchpad – Computing Foundations',
      issuer: 'Google Cloud',
      date: '2024',
      description: 'Cloud computing, GCP fundamentals, data workflows',
      url: '#',
      icon: '🌐',
    },
    {
      title: 'Learning Analytics Tools',
      issuer: 'NPTEL Swayam',
      date: '2024',
      description: 'Data-driven analytics, learning behaviour analysis',
      url: 'https://drive.google.com/file/d/1j8Rb0BfdDOGgTZYqLNf_zQbJ8RUHfmbc/view?usp=sharing/',
      icon: '📊',
    },
    {
      title: 'C++ Programming - Beginner to Advanced',
      issuer: 'Udemy',
      date: '2025',
      description: 'Deep dive in C++, advanced concepts',
      url: 'https://drive.google.com/file/d/16MXAvDalfYs5lRdkzWPughFz1juBx-_Y/view?usp=sharing/',
      icon: '⚙️',
    },
    {
      title: 'Data Structures and Algorithms Python',
      issuer: 'Udemy',
      date: '2025',
      description: 'Advanced DSA concepts, optimization techniques',
      url: 'https://drive.google.com/file/d/1vg6h3j4v0elqsBBpMAcprnxk6jG7__12/view?usp=sharing',
      icon: '🔗',
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
    <section id="certifications" className="py-24 px-4 relative">
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
              Certifications & Credentials
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-soft-gold to-dusty-gold rounded-full mx-auto" />
            <p className="text-deep-navy/70 mt-4 max-w-2xl mx-auto">
              Professional certifications demonstrating expertise across cloud, development, and data technologies
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-8 border border-white/40"
              >
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <span className="px-3 py-1 rounded-full bg-soft-gold/20 text-deep-navy text-xs font-bold">
                    {cert.date}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-deep-navy mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-soft-gold font-semibold mb-3">
                  {cert.issuer}
                </p>
                <p className="text-sm text-deep-navy/70 mb-6">
                  {cert.description}
                </p>

                {/* Link */}
                {cert.url && cert.url !== '#' && (
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-deep-navy hover:text-soft-gold font-semibold transition-colors text-sm"
                    whileHover={{ gap: 6 }}
                  >
                    View Credential
                    <FiExternalLink size={16} />
                  </motion.a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}