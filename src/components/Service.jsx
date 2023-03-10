import React from 'react'
import frontend from "../images/frontend.png"
import ui from "../images/ui.png"
import ux from "../images/ux.png"
import backend from "../images/backend.png"



const Service = () => {
  return (
    <section id='services' className=' items-center mt-10' >
    <h2 className='text-center md:text-3xl sm:text-lg font-bold'>Services</h2>
    <div className='grid  gap-1 text-white md:grid-cols-2 sm:grid-cols-1'>
      <div className='md:max-w-md md:mx-auto sm:max-w-md sm:mx-auto text-center mb-10'>
        <div className=''>
          <img className="h-40  shadow-2xl mx-auto  rounded-lg" alt="webapp" src={frontend}  />
        </div>
        <h3 className='xl:text-xl text-lg font-medium pt-8 pb-2 text-amber-300'>Front-End Development</h3>
       <div className='border  hover:scale-125 duration-500 border-amber-300 '>
       <p className='py-2'>
       web design and front-end development using HTML, tailwind CSS, JavaScript, and React, for performance optimization to improve page load times and enhance the user experience
        </p>
       </div>
      </div>
      <div className='md:max-w-md md:mx-auto sm:max-w-md sm:mx-auto text-center mb-10'>
        <div className=''>
          <img className="h-40  shadow-2xl mx-auto  rounded-lg" alt="webdesign" src={ux} />
        </div>
        <h3 className='xl:text-xl text-lg font-medium pt-8 pb-2 text-orange-500'>UI/UX design</h3>
        <div className="border border-orange-500 hover:scale-125 duration-500">
        <p className='text-md py-2 '>
        I create designs that  meet the client's needs, and constantly staying up-to-date with the latest design trends  to ensure that my designs are always innovative
        </p>
        </div>
      </div>
      <div className=' md:max-w-md md:mx-auto sm:max-w-md sm:mx-auto text-center  mb-10'>
        <div className=''>
          <img className="h-40  shadow-2xl mx-auto  rounded-lg" alt="uiux" src={ui} />
        </div>
        <h3 className='xl:text-xl text-lg font-medium pt-8 pb-2 text-lime-400'>Logo Design</h3>
        <div className="border border-lime-400 hover:scale-125 duration-500">
        <p className='py-2'>
        Branding guidelines creation to establish a consistent and cohesive visual language for your brand Logo, also revisions and refinements based on client feedback and preferences
        </p>
        </div>
      </div>
      <div className=' md:max-w-md md:mx-auto sm:max-w-md sm:mx-auto text-center  mb-10'>
        <div className=''>
          <img className=" shadow-2xl mx-auto h-40  rounded-lg" alt="uiux" src={backend} />
        </div>
        <h3 className='xl:text-xl text-lg font-medium pt-8 pb-2 text-black'>Back-End Development</h3>
        <div className="border border-black hover:scale-125 duration-500">
        <p className='py-2'>
        I design and develop a server-side logic using PHP with Laravel framework. and also integrate MySQL databases to store and retrieve large amount of data
 

        </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Service