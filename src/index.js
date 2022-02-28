import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import About from './components/About';
import Ammenities from './components/Ammenities';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<App/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/ammenities" element={<Ammenities/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);
