import React from 'react'
import rv from '../images/rv.png'
import { Link , animateScroll as scroll} from 'react-scroll';

const Navbar = () => {
  
  const links = [
    {
      id: 1,
      link: "services",
      
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "contact",
    }
  ];

  

  return (
    <div className=" flex justify-between items-center w-full h-20 text-white fixed px-4" >
      <div>
        
        <h1 className='text-5xl font-thin ml-2'><img src={rv} style={{height: 50}} alt="" /></h1>
      </div>

      <ul className="hidden md:flex">

      {links.map(({id, link}) => (
     <li key={id} className="px-6 cursor-pointer capitalize font-medium text-gray-500 hover:scale-150 duration-300">
      
      <Link to={link} smooth duration={500}>{link}</Link>
     
     </li>
          ))}   

        
       </ul>
    </div>
  )
}

export default Navbar