import React, { useEffect } from 'react'
import { useState } from 'react'
import './Dark.css'
const Dark = () => {
    const getStorageMood=()=>{
        let mood=''
        if (localStorage.getItem('mood')!= null) {
           mood=localStorage.getItem('mood')
        }
        return mood
    }


    const [dark_light, setdark_light] = useState(getStorageMood())
    const toggle =()=>{
        if (dark_light === 'light') {
            setdark_light('dark')
        }else{
            setdark_light('light')
        }
    }

    useEffect(() => {
      document.documentElement.className=dark_light
      localStorage.setItem('mood',dark_light)
      
    }, [dark_light])
    
  return (
    <div className={dark_light === 'light' ?"mood bg-dark text-white":"mood bg-light text-dark"} onClick={toggle}>
        
        
        {dark_light === 'light' ?<i className="fa-solid fa-moon"></i>:<i className="fa-solid fa-sun"></i>}
    </div>
  )
}

export default Dark