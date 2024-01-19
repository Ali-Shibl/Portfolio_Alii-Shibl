import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Helmet } from 'react-helmet'
import {Autoplay , Pagination} from 'swiper/modules'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'
import img6 from '../../assets/6.png'
import img7 from '../../assets/7.png'
import img8 from '../../assets/8.png'
import img9 from '../../assets/9.png'
import 'swiper/css';
import 'swiper/css/pagination';
import './Portfolio.css'





export default function Portfolio() {

  const projects=[
    {
      img: img2,
      github_link:'https://github.com/Ali-Shibl/Quran-Api',
      live_link:'https://ali-shibl.github.io/Quran-Api/',
      name:'Quran-Api',
      job:'html Css bootstrap js'
    },

    {
      img: img9,
      github_link:'https://github.com/Ali-Shibl/trending_Film',
      live_link:'https://ali-shibl.github.io/trending_Film/',
      name:'trending_Films',
      job:'react js' 
    }
    ,{
      img: img1,
      github_link:'https://github.com/Ali-Shibl/project',
      live_link:'https://ali-shibl.github.io/project/',
      name:'E-Commerce',
      job:'html Css'
     },
    
    
    {
      img: img4,
      github_link:'https://github.com/Ali-Shibl/js-jquery',
      live_link:'https://ali-shibl.github.io/js-jquery/',
      name:'application to jquery',
      job:'html Css bootstrap js jquery'
    },
    {
      img: img3,
      github_link:'https://github.com/Ali-Shibl/Challenge-on-frontend-mentor-website',
      live_link:'https://ali-shibl.github.io/Challenge-on-frontend-mentor-website/',
      name:'Challenge-frontend-mentor',
      job:'html Css bootstrap js' 
    },
    {
      img: img7,
      github_link:'https://github.com/Ali-Shibl/productMangement',
      live_link:'https://ali-shibl.github.io/productMangement/',
      name:'productMangement',
      job:'html Css bootstrap js' 
    }
    ,
    {
      img: img5,
      github_link:'https://github.com/Ali-Shibl/Portfolio-using-html-css',
      live_link:'https://ali-shibl.github.io/Portfolio-using-html-css/',
      name:'Portfolio/Html-Css',
      job:'html Css'
    },
    {
      img: img8,
      github_link:'https://github.com/Ali-Shibl/Calculator',
      live_link:'https://ali-shibl.github.io/Calculator/',
      name:'Calculator',
      job:'html Css bootstrap js' 
    }
    ,
    {
      img: img6,
      github_link:'https://github.com/Ali-Shibl/Bootstrap',
      live_link:'https://ali-shibl.github.io/Bootstrap/',
      name:'Bootstrap',
      job:'html Css bootstrap ' 
    }
    
  ]



  return (<>
  <Helmet>
   <meta charSet="utf-8" />
   <title>Portfolio | Ali-Shibl</title>
</Helmet>

      <section className='portfolio py-5'>
        <h2 className='text'>My <span>Portfolio</span> </h2>

        <div className="container">
          <div className='row justify-content-center align-items-center'>

           <Swiper 
           slidesPerview={1.2} 
           spaceBetween={20}
           breakpoints={{
            992:{
              slidesPerView:3
            },
            768:{
              slidesPerView:2
            }
           }}
           loop={true} 
           autoplay={{delay:3000,}}
           pagination={{
            clickable:true
           }}
           modules={[Pagination ,Autoplay]}
           >

           {projects.map( ({img,github_link,live_link,job,name},index)=>
            <SwiperSlide key={index}>
            
      
            <div className='position-relative w-100 h-100 rounded-2 project p-3'>
              <img src={img} alt="" className="rounded-3"/>

            <h5 className='my-3 '>{name}</h5>
           
           <div className="d-flex gap-3 mt-3">
             <a href={github_link} className='link  p-2 rounded-3'>
               Github
             </a>
             <a href={live_link}   className='link  p-2 rounded-3'>
               Live Demo
             </a>
            </div>
          
             <div className="box w-100 h-100 bg-light d-flex justify-content-center align-items-end rounded-2" >
              <p className='description'>{job}</p>
             </div>
             

           </div> 
                  </SwiperSlide>)}
               
           </Swiper>
          


            
            
            
           
            

          </div>
        </div>
         
      </section>

  </>
  )
}
