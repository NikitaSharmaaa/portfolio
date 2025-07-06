import { motion } from 'framer-motion';
import profilePic from './assets/profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-black to-[#4B0000] text-white font-body">
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 gap-10 py-10">

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 100 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-72 md:w-80 object-cover border-r-4 border-b-4 border-white shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-4xl sm:text-5xl font-heading">Hi, I'm Nikita</h2>
          <p className="text-base sm:text-lg max-w-md mx-auto md:mx-0">
            I'm a developer with an eye for detail and a passion for creating beautiful, functional web applications.
          </p>
        </div>

      </div>
    </section>
  );
}
