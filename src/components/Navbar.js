import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold fst-italic" to="/">Libert'Art</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end me-3" id="navbarNavAltMarkup">
            <div className="navbar-nav align-items-start ms-1">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/about">About us</NavLink>
              <NavLink className="nav-link" to="/ammenities">Ammenities</NavLink>
              <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
              <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
              <button className="nav-link btn btn-success btn-sm m-0 p-1">
                <a className="text-white" href="http://www.booking.com/Share-Dxed51" target="_blank">
                Book Now    
                </a>
              </button>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar