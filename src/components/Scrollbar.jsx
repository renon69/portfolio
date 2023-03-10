import React, { useEffect, useState } from 'react'
import "./Scrollbar.css"

const Scrollbar = () => {

    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.cliientHeight

        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled)
    }

    useEffect(() =>{
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll",onScroll)

        
    }, []);

  return (
    <div className="App">
        <div className="wrapper">
            <div className="style" style={{width: `${scrollTop}%`}}></div>
        </div>
    </div>
  )
}

export default Scrollbar