import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonSwimming, faCouch, faEye, faWifi, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Ammenities.css';

function Ammenities() {
  return (
    <div id='ammenities' className='my-5'>
        <Navbar/>
      <div className='container h-100 d-flex flex-column justify-content-center align-items-center'>
        <h1 className='h1 text-center my-5 ammenities-heading'>Ammenities</h1>
        <ul className="secondary-font ammenities-content">
            <div className="row">
                <div className="col-2 offset-3 offset-sm-2">
                    <FontAwesomeIcon icon={faPersonSwimming} />
                </div>
                <div className="col-4 col-sm-6">    
                    <li>Swimming pool</li>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-2 offset-3 offset-sm-2">
                <FontAwesomeIcon icon={faCouch} />
                </div>
                <div className="col-4 col-sm-6">
                <li>Shared lounge</li>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-2 offset-3 offset-sm-2">
                    <FontAwesomeIcon icon={faEye} />
                </div>
                <div className="col-4 col-sm-6">
                    <li>Garden and pool views</li>
                </div>    
            </div>
            <div className="row my-3">
                <div className="col-2 offset-3 offset-sm-2">
                <FontAwesomeIcon icon={faWifi} />
                </div>
                <div className="col-4 col-sm-6">
                    <li>Free Wifi</li>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-2 offset-3 offset-sm-2">
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
                <div className="col-4 col-sm-6">
                    <li>Fridge and oven are also provided, as well as a kettle and a coffee machine</li>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-2 offset-3 offset-sm-2">
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
                <div className="col-4 col-sm-6">
                    <li>A car rental service is available</li>
                </div>
            </div>
        </ul>
      </div>
    </div>
  )
}

export default Ammenities