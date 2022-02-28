import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className='text-center text-lg-start my-5'>
      {/* <!-- Grid container --> */}
      <div className='media-query-size container flex-row p-4 pb-0 align-items-stretch'>
        {/* <!-- Section: NavLinks --> */}
        <section className=''>
          {/* <!--Grid row--> */}
          <div className='row'>
            {/* <!--Grid column--> */}
            <div className='col-lg-4 col-md-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase fw-bold mb-2'>ADDRESS</h5>
              <ul>
                <li className='mb-2'>
                  <FontAwesomeIcon icon={faLocation} />
                   <span className='ms-2'>
                    N1, 44000 Essaouira, Morocco 
                    </span> 
                   </li>
                <li className='mt-2'>
                  <FontAwesomeIcon icon={faPhone} />
                  <span className='ms-2'>
                    +212 630-354976
                  </span>
                </li>
              </ul>
          </div>
          {/* <!--Grid column--> */}


          {/* <!--Grid column--> */}
          <div className='col-lg-8 col-md-6 mb-4 mb-md-0'>
            <div className='container d-flex justify-content-center align-items-top'>
              <ul className='list-unstyled mb-0 mx-4'>
                <li className='mb-1'>
                  <NavLink to='/home'>Home</NavLink>
                </li>
                <li className='mb-1'>
                  <NavLink to='/about'>About us</NavLink>
                </li>
                <li className='mb-1'>
                  <NavLink to='/gallery'>Gallery</NavLink>
                </li>
              </ul>
              <ul className='list-unstyled mb-0'>
                <li className='mb-1'>
                  <NavLink to='/ammenities'>Ammenities</NavLink>
                </li>
                <li className='mb-1'>
                  <NavLink to='/reviews'>Reviews</NavLink>
                </li>
                <li className='mb-1'>
                  <button className='btn-sm btn-success fst-italic fw-bold' to='http://www.booking.com/Share-Dxed51'>Book Now</button>
                </li>
              </ul>
            </div>
          </div>
          {/* <!--Grid column--> */}
          
        </div>
        {/* <!--Grid row--> */}
      </section>
      {/* <!-- Section: NavLinks --> */}

      <hr className='mb-4' />

      {/* <!-- Section: CTA --> */}
      <section className=''>
        <p className='d-flex justify-content-center align-items-center'>
          <span className='me-3'>Reserve your stay today!</span>
          <button type='button' className='btn btn-success btn-rounded'>
            <a className='fst-italic fw-bold text-white' to='http://www.booking.com/Share-Dxed51' target='_blank' rel='noreferrer'>BOOK NOW</a>
          </button>
        </p>
      </section>
      {/* <!-- Section: CTA --> */}

      <hr className='mb-4' />

      {/* <!-- Section: Social media --> */}
      <section className='mb-4 text-center align-self-center'>
        {/* <!-- Facebook --> */}
        <a
           className='btn btn-floating m-1'
           to='https://www.facebook.com/LibertartEssaouira'
           role='button'
           target='_blank'
           rel='noreferrer'
           >
            <FontAwesomeIcon className='no-border' icon={faFacebook} size='3x'/>
          </a>
        {/* <!-- Instagram --> */}
        <a
           className='btn btn-floating m-1'
           to='https://www.instagram.com/libertartessaouira/?hl=en'
           role='button'
           target='_blank'
           rel='noreferrer'
           >
            <FontAwesomeIcon className='no-border' icon={faInstagram} size='3x'/>
          </a>
      </section>
      {/* <!-- Section: Social media --> */}
       {/* <!-- Copyright --> */}
    </div>
    <div
         className='text-center p-1 text-muted'
         >
      <a className='mx-1 text-muted' href='https://micochango.com/' target='_blank'   rel='noreferrer'
         >powered by <span className='fst-italic fw-bold'>micochango | www.micochango.com </span>
      </a>
      © 2022 
    </div>
    {/* <!-- Grid container --> */}

   
    {/* <!-- Copyright --> */}
    </footer>
  );
}

export default Footer;

