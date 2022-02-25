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
                  <source srcSet="../../images/libertart-review1.webp" media="screen and (max-width: 600px)"media="screen and (max-width: 600px)" loading="lazy"/>
                  <img src="../../images/libertart-review1.jpg" className="img-fluid" alt="" loading="lazy" media="screen and (min-width: 1200px)"/>
                </picture>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review2.webp" media="screen and (max-width: 600px)"media="screen and (max-width: 600px)" loading="lazy"/>
                  <img src="../../images/libertart-review2.jpg" className="img-fluid" alt="" loading="lazy" media="screen and (min-width: 1200px)"/>
                </picture>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review3.webp" media="screen and (max-width: 600px)" loading="lazy"/>
                  <img src="../../images/libertart-review3.jpg" className="img-fluid" alt="" loading="lazy" media="screen and (min-width: 1200px)"/>
                </picture>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review4-250h.webp" media="screen and (max-width: 600px)" loading="lazy"/>
                  <img src="../../images/libertart-review4-250h.jpg" className="img-fluid" alt="" loading="lazy" media="screen and (min-width: 1200px)"/>
                </picture>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review5.webp" media="screen and (max-width: 600px)" loading="lazy"/>
                  <img src="../../images/libertart-review5.jpg" className="img-fluid" alt="" loading="lazy" media="screen and (min-width: 1200px)"/>
                </picture>  
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review6.webp" media="screen and (max-width: 600px)" loading="lazy"/>
                  <img src="../../images/libertart-review6.jpg" className="img-fluid" alt="" loading="lazy" media="screen and (min-width: 1200px)"/>
                </picture> 
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review7.webp" media="screen and (max-width: 600px)" loading="lazy"/>
                  <img src="../../images/libertart-review7.jpg" className="img-fluid" alt="" loading="lazy" media="screen and (min-width: 1200px)"/>
                </picture> 
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review8.webp" media="screen and (max-width: 600px)" loading="lazy"/>
                  <img src="../../images/libertart-review8.jpg" className="img-fluid" alt="" loading="lazy" media="screen and (min-width: 1200px)"/>
                </picture> 
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review9.webp" media="screen and (max-width: 600px)" loading="lazy"/>
                  <img src="../../images/libertart-review9.jpg" className="img-fluid" alt="" loading="lazy" media="screen and (min-width: 1200px)"/>
                </picture>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <picture>
                  <source srcSet="../../images/libertart-review10.webp" media="screen and (max-width: 600px)" loading="lazy"/>
                  <img src="../../images/libertart-review10.jpg" className="img-fluid" alt="" loading="lazy" media="screen and (min-width: 1200px)"/>
                </picture>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Reviews