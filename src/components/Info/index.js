import React from 'react'
import Logo from '../../assets/logo.png'

const Info = () => {
  return (
    <div className='info-ctr'>
      <img className='info-logo' src={Logo} />
      <p className='info-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  )
}

export default Info