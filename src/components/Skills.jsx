import React from 'react'
import skills from '../images/skills.png'
import skills11 from '../images/skills11.png'
import skills22 from '../images/skills22.png'

const Skills = () => {
  return (
    <section id=''>
        <div class="relative flex overflow-x-hidden">
  <div class="py-12 animate-marquee whitespace-nowrap">
     <span class="text-4xl mx-4"><img src={skills11} alt="" /> </span>
    
  </div>

  <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
    
    <span class="text-4xl mx-4 "><img  src={skills22}  alt="" /></span>
  </div>
</div>
    </section>

  )
}

export default Skills