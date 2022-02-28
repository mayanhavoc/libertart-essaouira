import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Ammenities from './components/Ammenities';
import Gallery from './components/Gallery';
// const About = lazy(() => import ('./components/About'));
// export const lazyGallery = lazy(() => import('./components/Gallery'),);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Ammenities/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
