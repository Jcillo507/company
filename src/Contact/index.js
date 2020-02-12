import React from 'react'
import './contact.scss'
import Button from '../Button/'

const Contact = ()=>{
  return(
    <div className='contact-ctr' id='contact'>
      <h2 className='contact-text'>Contact Us</h2>
      <p className='contact-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Button />
    </div>
  )
}

export default Contact