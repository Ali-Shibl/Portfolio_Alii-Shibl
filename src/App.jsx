import React, { useEffect, useState } from 'react'
import './App.css'
import{createHashRouter,RouterProvider} from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import Navbar from './Components/Navbar/Navbar'
import Loading from './Components/loading/Loading'

export default function App() {
  const [loader, setloader] = useState(true)

  let routers=createHashRouter([
 {
      path:'/',element:<Navbar/>,children:[
      {index:true,element:<Home/>},
      {path:'/about',element:<About/>},
      {path:'/contact',element:<Contact/>},
      {path:'/portfolio',element:<Portfolio/>},
    ]}
     ])
  
    useEffect(() => {
      setTimeout(() => {
        setloader(false)
      }, 1500);
  
    }, [])
    
  

  return (

    <>
    { loader ?  <Loading/> : <RouterProvider router={routers}/>}

    


    </>


  )
}

