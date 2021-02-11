import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer/'
import Intro from './components/Intro/'
import Info from './components/Info/'
import Services from './components/Services/'
import AboutUs from './components/AboutUs'
import Team from './components/Team/'
import Work from './components/Work/'
import Testimonial from './components/Testimonial/'
import Contact from './components/Contact'

import './css/main.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Info/>
      <Services />
      <AboutUs />
      <Team />
      <Work />
      <Testimonial/>
      <Contact/> 
      <Footer/>
    </div>
  );
}

export default App;
