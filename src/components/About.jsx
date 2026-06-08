import { motion } from 'framer-motion'

function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

const highlights = [
  { label: 'CGPA', value: '8.82' },
  { label: 'AWS Experience', value: 'Hands-on' },
  { label: 'Research Presentations', value: '1' },
]

  return (
    <section id="about" className="py-24 px-4 relative">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-soft-gold to-dusty-gold rounded-full mx-auto" />
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 mb-8"
          >
            <div className="md:col-span-2">
              <div className="glass rounded-2xl p-8 space-y-6">
                <p className="text-lg text-deep-navy/80 leading-relaxed">
                  I recently graduated with a Bachelor of Computer Applications (BCA) from Christ University with a CGPA of 8.82. During my academic journey and internships, I developed a strong interest in Artificial Intelligence and Machine Learning, particularly in building practical solutions using data, automation, and cloud technologies.
                </p>

                <p className="text-lg text-deep-navy/80 leading-relaxed">
                  My experience includes working on machine learning models, NLP-based applications, and document intelligence systems using AWS services. Through projects and industry exposure, I have gained hands-on experience with Python, data preprocessing, model development, and deploying AI-powered workflows.
                </p>

                <p className="text-lg text-deep-navy/80 leading-relaxed">
                  I'm currently looking to grow as an AI/ML professional by contributing to real-world products, learning from experienced teams, and continuing to strengthen my skills in machine learning, natural language processing, and applied AI.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="glass rounded-2xl p-6 text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-soft-gold to-dusty-gold bg-clip-text text-transparent mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm text-deep-navy/70 font-medium">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Snapshot */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-deep-navy mb-6">Quick Snapshot</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-soft-gold font-semibold mb-3">Currently</h4>
                <ul className="text-deep-navy/70 space-y-2 text-sm">
                  <li>✓ AI/ML Intern @Startrit</li>
                  <li>✓ BCA Student, Christ Univ</li>
                  <li>✓ Building ML pipelines</li>
                </ul>
              </div>
              <div>
                <h4 className="text-soft-gold font-semibold mb-3">Expertise</h4>
                <ul className="text-deep-navy/70 space-y-2 text-sm">
                  <li>✓ Machine Learning</li>
                  <li>✓ Natural Language Processing</li>
                  <li>✓ Cloud Computing (AWS)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-soft-gold font-semibold mb-3">Passion</h4>
                <ul className="text-deep-navy/70 space-y-2 text-sm">
                  <li>✓ Research & Development</li>
                  <li>✓ Model Optimization</li>
                  <li>✓ Intelligent Systems</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
export default About