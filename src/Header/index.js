import React from 'react'
import { Route, Link } from 'react-router-dom'
import './header.scss'
import Logo from '../assets/logo.png' 

const Header = () => {
  return (
    <div className='header-ctr'>
      <div className='flex header-left-ctr'>
        <Link>
          <img src={Logo} alt='logo' className='header-logo'/>
        </Link>
        <Link>
          <h2 className='header-link'>Services</h2>
        </Link>
        <Link>
          <h2 className='header-link'>Products</h2>
        </Link>
        <Link>
          <h2 className='header-link'>About Us</h2>
        </Link>
        <Link>
          <h2 className='header-link'>Contact</h2>
        </Link>
      </div>
      <div className='flex header-right-ctr'>
        <Link>
          <span className='header-link'>
            555-555-5555
          </span>
    </Link>
        <Link>
        
          <button className='header-link header-bttn'>Contact Us</button>
    </Link>
      </div>
    </div>
  )
}

export default Header