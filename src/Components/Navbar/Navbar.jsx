import React from 'react'
import {Link ,Outlet} from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
import Dark from '../Darkmood/Dark'
export default function Navbar() {
  const [show, setshow] = useState(false)
 

  return (<>

  

   <nav>
      <div >
      <ul className={show?' show-ul ':''} >
        <li><Link to='/' onClick={()=> setshow(false)}  className='links '><i className="icon fa-solid fa-house"></i> <p className='m-0'>home</p> </Link></li>
        <li ><Link to='/about' onClick={()=> setshow(false)}   className='links ' ><i className="icon fa-solid fa-user"></i> <p className='m-0'>about</p></Link></li>
       
        <li ><Link to='/portfolio'onClick={()=> setshow(false)}  className='links ' > <i className="icon fa-solid fa-folder-open"></i><p className='m-0'>Portfolio</p></Link></li>
        <li ><Link to='/contact' onClick={()=> setshow(false)} className='links ' > <i className="icon fa-solid fa-envelope-open"></i><p className='m-0'>contact</p></Link></li>
        
      </ul>
      </div>
 
  </nav>
     <div className='nav-toggle'>
      {show?<i className="fa-solid fa-xmark close" onClick={()=> setshow(false)}></i>:<i className="fa-solid fa-bars" onClick={()=> setshow(true)}></i>}
     
     </div>
     
    <Outlet></Outlet>

    <Dark/>
  </>)
}
