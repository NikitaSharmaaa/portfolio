import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: '🧠',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Supervised Learning', 'Classification', 'Regression', 'Feature Engineering', 'Model Evaluation'],
    },
    {
      title: 'Natural Language Processing',
      icon: '📝',
      skills: ['NLTK', 'TextBlob', 'TF-IDF', 'Sentiment Analysis', 'Topic Modelling (LDA)', 'Tokenization', 'Text Preprocessing', 'Text Analytics'],
    },
    {
      title: 'Cloud & AWS',
      icon: '☁️',
      skills: ['AWS Rekognition', 'AWS Textract', 'Amazon S3', 'AWS Cloud Foundations', 'Google Cloud Platform', 'Document Intelligence'],
    },
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Python', 'Java', 'C++', 'JavaScript', 'C#', '.NET'],
    },
    {
      title: 'Web & Backend',
      icon: '🌐',
      skills: ['Django', 'React.js', 'Angular', 'REST APIs', 'SQLite', 'MySQL', 'MongoDB', 'Bootstrap'],
    },
    {
      title: 'Tools & Technologies',
      icon: '⚙️',
      skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VSCode', 'Android Studio', 'Figma', 'Postman'],
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
    <section id="skills" className="py-24 px-4 relative">
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
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-soft-gold to-dusty-gold rounded-full mx-auto" />
            <p className="text-deep-navy/70 mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on experience and continuous learning
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-8 cursor-pointer group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{category.icon}</div>
                  <h3 className="text-xl font-bold text-deep-navy group-hover:text-soft-gold transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      className="px-3 py-1 rounded-full bg-soft-gold/20 text-deep-navy text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIdx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Exploring Section */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8 border-2 border-coral-blush/30">
            <h3 className="text-2xl font-bold text-deep-navy mb-4 flex items-center gap-2">
              <span>🚀</span> Currently Exploring
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Docker', 'Kubernetes', 'Advanced NLP Models', 'Computer Vision', 'Cybersecurity'].map((item, idx) => (
                <motion.span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-coral-blush/30 to-soft-pink/30 text-deep-navy font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}