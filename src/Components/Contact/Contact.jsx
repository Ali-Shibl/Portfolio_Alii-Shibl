import React, {useLayoutEffect, useRef } from 'react'
import { Helmet } from 'react-helmet';
import './Contact.css'
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
 let element =useRef()
 
 useLayoutEffect(()=>{
  element.current.focus();
 },[])

  const sendEmail =(e)=> {
    e.preventDefault();
    emailjs.sendForm('service_9cngt8w','template_e2cwsc8',e.target,'r5gcjm2vH36gucGxC')
    toast.success("Message successfully")
  }



  return (<>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Ali Shibl | Contact</title>
    </Helmet>
    <ToastContainer />

    <section className='contact py-5 '>
      <h2 className='text'>Get In <span>Touch</span></h2>
      <div className='container'>
      <div className="row   justify-content-center gap-4 gap-md-0">
        <div className='col-md-4'>
          <h3 className='mb-3'>Don't be shy!</h3>
          <p className="lh-lg">I will be happy when we talk and share options and experience, and this will increase my enthusiasm and experience</p>
          <div className="d-flex justify-content-start gap-4 align-items-center">
          <a href="mailto:ali.m7md168@gmail.com" >
              <i className="fa-solid fa-envelope-open icon-email"></i>
              </a>
          <div className='email'>
          <a href="mailto:ali.m7md168@gmail.com" >
            <span className='d-block mb-1'>email Me</span>
            <span>ali.m7md168@gmail.com</span>
             </a>
  
          </div>
          </div>
          <div className="my-4 d-flex justify-content-start gap-4 align-items-center">
          <a href="tel:01143584870">
          <i className="fa-solid fa-phone-volume icon-phone"></i>
          </a>
          
          <div className='call'>
          <a href="tel:01143584870">
            <span className='d-block mb-1'>Call Me</span>
            <span>01143584870</span>
            </a>
  
          </div>
          </div>
          <div className="d-flex gap-4 align-items-center">
          <Link to='https://www.facebook.com/profile.php?id=100006448771484'>
            <div className='social-link face'> <i className="fa-brands fa-facebook"></i> </div> 
            </Link>
          <Link to='https://www.instagram.com/alii.uwk/'>
          <div className='social-link insta'> 
          <i className="fa-brands fa-instagram"></i> 
          </div> 
            </Link>
          <Link to='https://github.com/Ali-Shibl'>
          <div className='social-link github'> 
          <i className="fa-brands fa-github"></i>
          </div> 
            </Link>
          <Link to='https://www.linkedin.com/in/ali-shibl-587261224/'>
          <div className='social-link '> 
          <i className="fa-brands fa-linkedin"></i>
          </div> 
            
            </Link>
          </div>
        </div>

        <div className='col-md-8'>
          <form onSubmit={sendEmail}>
               
            <div className='row g-3'>
              <div className='col-md-4'><input ref={element} type="text" name='name_from'  placeholder='Your Name' className="form-control" required/></div>
              <div className='col-md-4'><input  type="email" name='email_from' placeholder='Your Email' className="form-control" required/></div>
              <div className='col-md-4'><input  type="text" name='subject_from' placeholder='Subject' className="form-control" required/></div>
             
           
            </div>
            <textarea placeholder='Your Message'  name='message' className='form-control my-3 ' required></textarea>
            <button className='button'>
              Send Message
              <i className="fa-solid fa-paper-plane"></i>

            </button>
          </form>

        </div>

      </div>
       </div>
    </section>

  </>
  )
}
