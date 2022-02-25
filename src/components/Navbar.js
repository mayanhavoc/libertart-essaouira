import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Libert'Art</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end me-3" id="navbarNavAltMarkup">
            <div className="navbar-nav align-items-center">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#about">About us</a>
              <a className="nav-link" href="#ammenities">Ammenities</a>
              <a className="nav-link" href="#reviews">Reviews</a>
              <a className="nav-link" href="#gallery">Gallery</a>
              <a className="nav-link btn btn-success btn-sm text-white" href="http://www.booking.com/Share-Dxed51">Book Now</a>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar