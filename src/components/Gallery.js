import React from 'react';
import './Gallery.css'

function Gallery() {
  return (
    <section id='gallery' className='h-100'>
      <div className='container d-flex flex-column justify-content-center align-items-center'>
        <div className="justify-self-start my-5 pt-5">
          <h1 className='h1 text-center gallery-heading'>Gallery</h1>
        </div>
        <hr className='my-1'/>
        <div className="row" data-masonry='{"percentPosition": true }'>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-front.jpg" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-beach.jpg" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-donuts.jpg" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-garden.jpg" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-sign.jpg" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-pool.jpg" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-lawnchairs.jpg" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-flowergarden.jpg" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-fort.jpg" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-breakfast.jpg" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery