import React from 'react';
import './Gallery.css';
import Navbar from './Navbar';

function Gallery() {
  return (
    <section id='gallery' className='h-100'>
      <Navbar/>
      <div className='container d-flex flex-column justify-content-center align-items-center'>
        <div className="justify-self-start my-5 pt-5">
          <h1 className='h1 text-center gallery-heading'>Gallery</h1>
        </div>
        <hr className='my-1'/>
        <div className="row" data-masonry='{"percentPosition": true }'>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <picture>
                  <source srcSet="../images/libertart-front.webp"  loading="lazy"/>
                  <img src="../images/libertart-front.jpg" className="img-fluid d-block" alt="libertart-front" loading="lazy" />
              </picture>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <picture>
                <source srcSet="../images/libertart-beach.webp"  loading="lazy"/>
                <img src="../images/libertart-beach.jpg" className="img-fluid d-block" alt="libertart-beach" loading="lazy" />
              </picture>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <picture>
                <source srcSet="../images/libertart-donuts.webp"  loading="lazy"/>
                <img src="../images/libertart-donuts.jpg" className="img-fluid d-block" alt="libertart-donuts" loading="lazy" />
              </picture>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <picture>
                <source srcSet="../images/libertart-garden.webp"  loading="lazy"/>
                <img src="../images/libertart-garden.jpg" className="img-fluid d-block" alt="libertart-garden" loading="lazy" />
              </picture>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <picture>
                <source srcSet="../images/libertart-sign.webp"  loading="lazy"/>
                <img src="../images/libertart-sign.jpg" className="img-fluid d-block" alt="libertart-sign" loading="lazy" />
              </picture>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <picture>
                <source srcSet="../images/libertart-pool.webp"  loading="lazy"/>
                <img src="../images/libertart-pool.jpg" className="img-fluid d-block" alt="libertart-sign" loading="lazy" />
              </picture>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <picture>
                <source srcSet="../images/libertart-lawnchairs.webp"  loading="lazy"/>
                <img src="../images/libertart-lawnchairs.jpg" className="img-fluid d-block" alt="libertart-sign" loading="lazy" />
              </picture>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <picture>
                <source srcSet="../images/libertart-flowergarden.webp"  loading="lazy"/>
                <img src="../images/libertart-flowergarden.jpg" className="img-fluid d-block" alt="libertart-sign" loading="lazy" />
              </picture>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <picture>
                <source srcSet="../images/libertart-fort.webp"  loading="lazy"/>
                <img src="../images/libertart-fort.jpg" className="img-fluid d-block" alt="libertart-sign" loading="lazy" />
              </picture>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <picture>
                <source srcSet="../images/libertart-breakfast.webp"  loading="lazy"/>
                <img src="../images/libertart-breakfast.jpg" className="img-fluid d-block" alt="libertart-sign" loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery;