import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
    <div className='overlay'></div>
    <section id='home' className='vh-100 landing'>
        <div className='container vh-100 d-flex flex-column justify-content-center align-items-center'>
            <span className='mt-5 tagline'>Un nouveau concept de l’hébergement</span>
        </div>
    </section>
    </>
  )
}

export default Home