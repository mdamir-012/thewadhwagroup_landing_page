import React from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Stats from './Components/Stats/Stats';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Stats />
    </div>
  );
}

export default App;
