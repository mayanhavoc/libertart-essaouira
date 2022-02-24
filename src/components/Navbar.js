import React from 'react'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Libert'Art</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#about">About us</a>
              <a class="nav-link" href="#ammenities">Ammenities</a>
              <a class="nav-link" href="#reviews">Reviews</a>
              <a class="nav-link" href="#gallery">Gallery</a>
              <a class="nav-link" href="http://www.booking.com/Share-Dxed51">Book Now</a>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar