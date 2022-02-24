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
                <img src="../../images/libertart-review1.png" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review2.png" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review3.png" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review4.png" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review3.png" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../images/libertart-review4.png" class="card-img-top rounded" alt="..."/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Reviews