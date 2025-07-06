import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Certifications from './Certifications'
import ExperienceProjects from './ExperienceProjects'
import Skills from './Skills'
import BeyondCode from './BeyondCode'
import Contact from './Contact'
import NavigationHub from './NavigationHub'

function App() {
  return (
    <div className="overflow-x-hidden min-h-screen bg-gradient-to-r from-black to-[#4B0000] text-beige">
      <Navbar/>
      <Hero/>
      <Certifications/>
      <ExperienceProjects/>
      <Skills/>
      <BeyondCode/>
      <Contact/>
    </div>
  )
}

export default App
