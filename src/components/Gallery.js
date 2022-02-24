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
              <img src="../images/libertart-front.png" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-beach.png" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-donuts.png" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-garden.png" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-sign.png" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-pool.png" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-lawnchairs.png" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-flowegarden.png" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-fort.png" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-1">
            <div className="card">
              <img src="../images/libertart-breakfast.png" class="card-img-top rounded" alt="..."/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery