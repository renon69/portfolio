import React from 'react'
import {FaGithub, FaLinkedin,FaFilePdf, FaEnvelope} from "react-icons/fa"

const SocialLinks = () => {

    const links = [
        {
            id:1,
            child: (
                <>
                GitHub <FaGithub size={30} color={'#641975'}/> 
                </>
            ), 
            href: 'https://github.com/renon69',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} color={'#0067a5'}/> 
                </>
            ), 
            href: 'https://www.linkedin.com/in/renon-sugitarios-6a34121b4/',
            style: 'rounded-tr-md'
        },
        {
            id:3,
            child: (
                <>
                  Mail Me <FaEnvelope size={30} color={'skyblue'}/> 
                </>
            ), 
            href: 'mailto:sugitarios.renon_vincent@hnu.edu.ph',
            style: 'rounded-tr-md'
        },
        {
            id:4,
            child: (
                <>
                Resume <FaFilePdf size={30} color={'red'}/> 
                </>
            ), 
            href: '/renon-resume.pdf',
            style: 'rounded-tr-md',
            download: true,
           
        }
    ]

  return (
   <div className="flex flex-col top-[35%] left-0 fixed ">
    <ul>

        {links.map(({id, child, href, style, download}) =>(
                 <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-700 hover:rounded-3xl" + "" + style }  >
                 <a href={href} className='flex justify-between
                  w-full text-white' download={download} target="_blank" >
                     <>
                        {child}
                     </>
                    
                 </a>
             </li>
        ))}


       
    </ul>
   </div>
  )
}

export default SocialLinks