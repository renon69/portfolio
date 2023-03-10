import React from 'react'
import Hero from './components/Hero'
import Service from './components/Service'
import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Scrollbar from './components/Scrollbar'

// import Skills from "./components/Skills"
const App = () => {
  return (
    <div className='bg-slate-700'>
   

    
      <Navbar/>
      <Hero/>
      <Service/>
      <About/>
      {/* <Skills/> */}
      <Projects/>
      <SocialLinks/>
      <Contact/>
  
    </div>
  )
}

export default App