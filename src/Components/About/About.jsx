import React from 'react'
import { Helmet } from 'react-helmet';
import './About.css'
import CV from '../../assets/Ali_Mohamed cv.pdf'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function About() {


  return (<>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Ali Shibl | About page </title>
    </Helmet>



    <main className="container">
      <section className='about pt-5'>

        <h2 className='text'>About <span>Me</span></h2>

        <div className='row '>
          <h3 >Personal Infos :</h3>
          <div className='col-md-6 '>

            <p>Frist Name : <span>Ali</span></p>
            <p>Last Name : <span>Mohamed</span></p>
            <p>Email : <span>ali.m7md168@gmail.com</span> </p>
            <p>Age : <span>23 Years</span></p>
            <p>Phone : <span>01143584870</span> </p>
            <p>Langages : <span> Arabic , English</span>  </p>


          </div>

          <div className='col-md-6'>
            
            <p>City : <span> Egypt,Menofia</span></p>
            <p>Bachelor's Degree in <span> information System.</span></p>
            <p>College : <span> Faculty of Computers and Information,Menofia University.</span></p>
            <p>grade : <span>good</span> </p>

          </div>

        </div>
        <a href={CV} download='' className='button mt-3'>
          Download Cv <i className="fa-solid fa-download"></i>
        </a>

      </section>
      <div className='separtor'></div>

      <section className='skills'>
        <h3 >My Skills</h3>
        <div className='row justify-content-center  align-items-center g-4 '>
          <div className=' col-sm-6 col-md-4 col-lg-3 text-center'>
             
              <CircularProgressbar strokeWidth={7.5} text='88%' value={88} />
          
             <h3 className='h-skill'>Html</h3>
          </div>
          <div className=' col-sm-6 col-md-4 col-lg-3 text-center'>
             <div >
              <CircularProgressbar strokeWidth={7.5} text='95%' value={95}/>
             </div> 
             <h3 className='h-skill'>Css</h3>
          </div>
          <div className=' col-sm-6 col-md-4 col-lg-3 text-center'>
             <div >
              <CircularProgressbar strokeWidth={7.5} text='75%' value={75}/>
             </div> 
             <h3 className='h-skill'>Javascript</h3>
          </div>
          <div className=' col-sm-6 col-md-4 col-lg-3 text-center'>
             <div >
              <CircularProgressbar strokeWidth={7.5} text='90%' value={90}/>
             </div> 
             <h3 className='h-skill'>Bootstrap</h3>
          </div>
          <div className=' col-sm-6 col-md-4 col-lg-3 text-center'>
             <div >
              <CircularProgressbar strokeWidth={7.5} text='85%' value={85}/>
             </div> 
             <h3 className='h-skill'>Jquery</h3>
          </div>
          <div className=' col-sm-6 col-md-4 col-lg-3 text-center'>
             <div >
              <CircularProgressbar strokeWidth={7.5} text='65%' value={65}/>
             </div> 
             <h3 className='h-skill'>React</h3>
          </div>
          
          
          
         
        </div>
      </section>

    </main>


  </>)
}
