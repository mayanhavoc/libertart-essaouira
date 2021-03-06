import React from 'react';
import Navbar from './Navbar';
import Ammenities from './Ammenities';
import Reviews from './Reviews';
import './About.css';

function About() {
  return (
    <section id='about'>
      <Navbar/>
      <div className='about-container container h-100 d-flex flex-column justify-content-around align-items-center'>
          <h1 className='about-heading mt-5 py-5 h1 text-center'>About</h1>
          <picture>
            <source srcSet="../images/libertart-hosts.webp" />
            <img src="../images/libertart-hosts.jpg" className="about-img" alt="" loading="lazy"/>
          </picture>          
          <p className="my-5 w-50 secondary-font text-center about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cumque ea reprehenderit esse obcaecati pariatur unde vero odit eaque animi? Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='container h-100 d-flex flex-column justify-content-center align-items-center'>
          <Ammenities />  
        </div>  
        <div className='container d-flex flex-column justify-content-center align-items-center'>
          <Reviews />  
        </div>  
    </section>
  )
}

export default About