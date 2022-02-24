import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About />
      <Gallery />
      <Footer/>
    </div>
  );
}

export default App;
