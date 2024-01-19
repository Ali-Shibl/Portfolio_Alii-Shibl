import React from 'react'
import profile from '../../assets/alii.jpg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Typical from 'react-typical'
import './Home.css'

export default function Home() {


  return (
    <>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Ali Shibl | Home Page</title>
      </Helmet>

      <section className='container home py-5 py-md-0'>

        <div className="row  g-3 g-md-0 justify-content-center align-items-md-center vh-100">
          <div className="col-md-4 text-center">
            <div className='color'></div>
            <div className='image position-relative'>
              <img src={profile} alt="" />

            </div>

          </div>

          <div className="offset-md-1 col-md-7">

            <div className='content '>

              <h1 className='title '>
                <span>I'm Ali mohamed</span> <br />
                <Typical
                  steps={['frontend developer', 1500, "React Dev", 1500]}
                  loop={Infinity}
                  />
              </h1>
              <p className='description'>
                I am a self-taught frontend developer, Creating web pages and web applications is my passion. I am looking forward to being the kind of assistant you need to make your business flourish.
              </p>

              <Link to='/about'>
                <button className='button mb-4'>
                  More About Me <i className="fa-solid fa-arrow-right"></i>
                </button>
              </Link>

            </div>

          </div>


        </div>


      </section>



    </>
  )
}
