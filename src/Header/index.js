import React from 'react'
import './header.scss'
import Logo from '../assets/logo.png' 
import Headroom from 'react-headroom'

const Header = () => {
  return (
    <Headroom className='headroom-style' style={{ background: '#F9F8F8', boxShadow:'1px 1px #888888'}}>
    <div className='header-ctr' id='home'>

      <div className='flex header-left-ctr'>
        <a href='#home'>
          <img src={Logo} alt='logo' className='header-logo'/>
          </a>
        <a href='#services'>
          <h2 className='header-link'>Services</h2>
        </a>
        <a href='#aboutus'>
          <h2 className='header-link'>About Us</h2>
        </a>
        <a href='#team'>
          <h2 className='header-link'>Team</h2>
        </a>
        <a href='#contact'>
          <h2 className='header-link'>Contact</h2>
        </a>
      </div>
      <div className='flex header-right-ctr'>
        
          <span className='header-link'>
            555-555-5555
          </span>
    
          <button className='header-link header-bttn'>Contact Us</button>
      </div>
   
    
    
  
    </div>
      </Headroom>
  )
}

export default Header