import { useState } from 'react'
import { div } from 'framer-motion/client'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import './index.css'
import Comm from './components/Comm'

const App = () => {

  return (
    <BrowserRouter>
      <div className="bg-[url('/src/assets/herobg.png')]">

        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center text-9xl'></div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0 '>
          <Comm />
          <Contact />

          <StarsCanvas />

        </div>
      </div>
    </BrowserRouter >
  )
}

export default App
