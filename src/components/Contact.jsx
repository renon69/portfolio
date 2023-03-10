import React from 'react'
import Footer from './Footer'
import {useRef} from 'react'
// import { Toast } from 'react-toastify/dist/types'
// import {useForm} from "react-hook-form"
import emailjs from '@emailjs/browser'


const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2b8icsa', 'template_yuodxq7', form.current, 'E9oe2NAod0cPLlRIA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

      return (
 <div className=" text-black ">


        <section className='justify-center flex mb-11 mt-12' id='contact'>
        <div class="container border md:w-96  justify-center px-4 sm:w-3/4  bg-transparent ">
  <div class="p-5 space-y-5 shadow-xl">
    <h4 class="text-center mb:text-4xl sm:text-xl">Contact Us</h4>

    <form ref={form} onSubmit={sendEmail} >
      <div class="grid grid-cols-2 gap-5">
        <input
          type="text"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
          placeholder="First Name"
          name='user_name'
          required
          pattern = '^[a-zA-Z]{2,}([ ][a-zA-Z]{2,})*$'
        />
        <input
          type="text"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
          placeholder="Last Name"
          required
          pattern="^[A-Za-z]{1,50}$"
        />
        <input
          type="email"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Email"
          name='user_email'
          required
          pattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        />
        <input
          type="tel"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Phone"
          required
          pattern='^(09|\+639)\d{9}$'
        />
        <textarea
        name='message'
          cols="10"
          rows="5"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Write your message..."
          required
        ></textarea>
      </div>
      <input
        type="submit"
        value="Send Message"
        class="focus:outline-none mt-5 bg-blue-400 px-4 py-2 text-white font-bold w-full hover:bg-emerald-500 transition duration-300"
        
      />
    </form>
  </div>
</div>
        </section>
      
            <Footer/>
 </div>

  )
}

export default Contact