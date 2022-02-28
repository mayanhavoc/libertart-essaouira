import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
    <div className='overlay'></div>
    <section id='home' className='vh-100 landing'>
      <div className="tagline">
        <h1>Come find the peace you seek in your daily life</h1>
        <button className="btn btn-success">
          <a className="text-white" href="" target="_blank">
            Book Now
          </a>
        </button>
      </div>
    </section>
    </>
  )
}

export default Home