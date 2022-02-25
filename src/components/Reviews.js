import React from 'react';
import './Reviews.css';

function Reviews() {
  return (
    <div id="reviews" className='review-height'>
        <div className="container d-flex flex-column justify-content-around align-items-center">
          <h1 className="h1 reviews-heading my-5">Reviews</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review1.webp" />
                  <img src="../../images/libertart-review1.jpg" className="img-fluid" alt="" loading="lazy"/>
                </picture>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review2.webp" />
                  <img src="../../images/libertart-review2.jpg" className="img-fluid" alt="" loading="lazy"/>
                </picture>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review3.webp" />
                  <img src="../../images/libertart-review3.jpg" className="img-fluid" alt="" loading="lazy"/>
                </picture>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review4-250h.webp" />
                  <img src="../../images/libertart-review4-250h.jpg" className="img-fluid" alt="" loading="lazy"/>
                </picture>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review5.webp" />
                  <img src="../../images/libertart-review5.jpg" className="img-fluid" alt="" loading="lazy"/>
                </picture>  
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review6.webp" />
                  <img src="../../images/libertart-review6.jpg" className="img-fluid" alt="" loading="lazy"/>
                </picture> 
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review7.webp" />
                  <img src="../../images/libertart-review7.jpg" className="img-fluid" alt="" loading="lazy"/>
                </picture> 
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review8.webp" />
                  <img src="../../images/libertart-review8.jpg" className="img-fluid" alt="" loading="lazy"/>
                </picture> 
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review9.webp" />
                  <img src="../../images/libertart-review9.jpg" className="img-fluid" alt="" loading="lazy"/>
                </picture>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review10.webp" />
                  <img src="../../images/libertart-review10.jpg" className="img-fluid" alt="" loading="lazy"/>
                </picture>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Reviews