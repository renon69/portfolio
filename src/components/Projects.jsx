import React from 'react'
import system from "../images/system.png"
import prototype from '../images/prototype.png'
import logoDesign from '../images/logoDesign.png'

const Projects = () => {
  return (
    <section id='projects'>
         <h2 className='text-center text-3xl font-bold'>My Projects</h2>
          <div className='flex flex-wrap justify-center gap-5  grid  text-white md:grid-cols-2 sm:grid-cols-1'>
              <div className='hover:scale-125 duration-500 py-5 text-white text-xl '>
                <h2 className='text-center'>AthomeExplorer - Fulllstack Development</h2>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg " alt="figma" src={system} />
              </div>
              <div className='hover:scale-125 duration-500 py-5 text-white text-xl'>
                <h2 className='text-center'>PC Build App - prototype</h2>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="figma" src={prototype}/>
              </div>
              <div className='hover:scale-125 duration-500 py-5 text-xl'>
              <h2 className='text-center'>HopBags - Logo </h2>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="react" src={logoDesign}/>
              </div>
              <div className='hover:scale-125 duration-500 py-5 text-xl'>
              <h2 className='text-center'>HopBags - Logo </h2>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="react" src={logoDesign}/>
              </div>
             
          </div>
        </section>
  )
}

export default Projects