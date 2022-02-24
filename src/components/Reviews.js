import React from 'react';
import './Reviews.css';

function Reviews() {
  return (
    <div id="reviews" className='review-height'>
        <div className="container d-flex flex-column justify-content-around align-items-center">
          <h1 className="h1 reviews-heading my-5">Reviews</h1>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review1.jpg" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review2.jpg" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review3.jpg" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review4-250h.jpg" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review5.jpg" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review6.jpg" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review7.jpg" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review8.jpg" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review9.jpg" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review10.jpg" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Reviews