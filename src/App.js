import React from 'react';

import Header from './Header/'
import Footer from './Footer/'
import Intro from './Intro/'
import Info from './Info/'
import Services from './Services/'
import Product from './Products/'
import AboutUs from './AboutUs/'
import Team from './Team/'
import Work from './Work/'
import Testimonial from './Testimonial/'
import Contact from './Contact/'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      
      <Info/>
      <Services />
      {/* <Product/> */}
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
