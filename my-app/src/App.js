import React from 'react';
import './App.css';
import About from './Components/About/About';
import Awards from './Components/Awards/Awards';
import Content from './Components/Content/Content';
import CurrentProjects from './Components/CurrentProjects/CurrentProjects';
// import Features from './Components/Features';
import AboutUs from './Components/About Us/AboutUs';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import RequestCallBack from './Components/Request/RequestCallBack';
import Stats from './Components/Stats/Stats';
import Testimonials from './Components/Testimonials/Testimonials';

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
      <Features />
      <Testimonials />
      <AboutUs />
      <RequestCallBack />
      <Footer />
    </div>
  );
}

export default App;
