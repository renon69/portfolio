import React from 'react'
import rv from "../images/rv.png"
import {FaFacebook, FaGoogle,FaTelegram, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <section>
    <div className=' justify-items-center bg-black grid md:grid-cols-3 sm:grid-cols-1 text-white'>
      <div className=""><p>sugitarios.renon_vincent@hnu.edu.ph</p></div>
      <div className="">
        <img src={rv} style={{height: 40}} alt="" /> 
        
        </div>
      <div className=""><p>Developer / Designer</p></div>
      
    </div>
  </section>
  )
}

export default Footer