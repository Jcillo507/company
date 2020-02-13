import React from 'react'

import Logo from '../assets/logo.png' 

import './footer.scss'

const Footer  = ()=>{
return(
  <div className='footer-ctr'>
   {/* <div className='footer-img'>
      <img src={Logo} alt='logo' className='header-logo' />
   </div> */}
    <div className='footer-text'>
    <h3>123 Your Address Ave // Your City // Your state</h3>
   
      555-555-5555
    
    <h4>youremail@email.com</h4>
    </div>
      <div>
    <h5>copyright 2020</h5>
    </div>
  </div>
)
}

export default Footer