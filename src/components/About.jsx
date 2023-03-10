import React from 'react'
import renon from "../images/renon.png"
import figma from "../images/figma.png"
import ai from "../images/ai.png"
import javascript from "../images/javascript.png"
import react from "../images/react.png"
import php from "../images/php.png"
import laravel from "../images/laravel.png"
import mysql from "../images/mysql.png"
import Skills from './Skills'

const About = () => {
    return (
        <section id='about' className="pb-8 bg-slate-700"  >
           
            <div className='lg:flex gap-5 mx-10 '>
                <div className='lg:w-1/2 shadow-2xl p-5 rounded-lg md:w-[600px] mx-auto'>
                    <img className=" shadow-2xl mx-auto w-[400px] h-[400px] rounded-lg" alt="hnu" src={renon} />
                    <div className='text-center  text-4xl mt-20'><h2>Tools and Skills</h2></div>
                    <Skills/>
                    
                </div>
                <div className=' lg:w-1/2 mx-auto shadow-2xl p-5 rounded-lg'>
                
                    <p className="lg:text-xl md:text-lg text-md py-8 leading-8 lg:px-16 px-1 text-center mt-20 text-white">
                    I’ am a fresh graduate  with skills in UI/UX design, front-end development, and back-end development. I am passionate about creating visually appealing and user-friendly interfaces that provide an excellent user experience. I prioritize writing clean, maintainable, and efficient code that delivers high-performance results. I am constantly seeking to learn and grow my skills to stay up-to-date with the latest technologies and industry trends.
                    </p>
                    <div className='text-center  text-4xl mt-28'><h2>About me</h2></div>
                </div>
            </div>
        </section>
        )
}

export default About