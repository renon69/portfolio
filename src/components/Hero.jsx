import React from 'react'
import developer from '../images/developer.png'
import About from './About'
import { Link, animateScroll } from 'react-scroll'

const Hero = () => {
  return (
    <div id="hero" className='h-screen min-w-full bg-gradient-to-b via-black from-black to-gray-800'>

      <div className='max-w-screen-lg mx-auto flex flex-row items-center justify-start h-full px-4 md:flex-row sm:items-center'>
        <div>
          <p className='text-gray-500 py-4'>Hi, I am Renon Sugitarios </p>
          <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-4"
                 >Web Developer, UI/UX Designer.</h1>
          <h2 className='text-gray-500 py-6 '>I turn ideas into reality</h2>

          
        <div>
          <button className='px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold  [] rounded '>
          
            <span >
            <Link to='about' smooth duration={500}>about me</Link>
              
            </span>
          </button>
        </div>
         
        </div>
        <div className='mx-20'>
            <img className='mx-auto' src={developer} alt="" />
          </div>
      </div>

    </div>
  )
}

export default Hero