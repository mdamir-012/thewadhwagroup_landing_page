import React from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Stats from './Components/Stats/Stats';
import CurrentProjects from './Components/CurrentProjects/CurrentProjects';
import Content from './Components/Content/Content';
import Awards from './Components/Awards/Awards';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <CurrentProjects />
      <Content />
      <Awards />
    </div>
  );
}

export default App;
