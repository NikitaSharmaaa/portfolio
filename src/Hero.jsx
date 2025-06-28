import {motion} from 'framer-motion';
import profilePic from './assets/profile.jpg';

export default function Hero() {
  return (
    <section id="home">
     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gradient-to-r from-black to-[#4B0000] text-white font-body">
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0"
        initial={{ opacity: 0, y: 0 , x: -50 }}
        animate={{ opacity: 1, y: 0 , x: 200}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
         <img src={profilePic} alt="Profile" className="w-80 h-75 object-cover border-r-4 border-b-4 border-white border-spacing-0  shadow-lg " />
      </motion.div>
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-5xl font-heading">Hi, I'm Nikita</h2>
        <p className="text-lg max-w-md">
            I'm a developer with an eye for detail and a passion for creating beautiful, functional web applications.
        </p>
        </div>  
        
    </div>
    </section>
  )
}

