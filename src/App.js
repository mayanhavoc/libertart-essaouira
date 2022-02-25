import React, { lazy } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
// const About = lazy(() => import ('./components/About'));
// const Gallery = lazy(() => import ('./components/Gallery'));


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home defer/>
      <About defer/>
      <Gallery defer/>
      <Footer/>
    </div>
  );
}

export default App;
