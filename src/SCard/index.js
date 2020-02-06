import React from 'react'
import './scard.scss'

const SCard = (props) => {
  return (
    <div className='services-card'>
      <img src={props.image} className='s-card-img'/>
      <h2 className='s-card-title'>{props.title}</h2>
      <p className='s-card-desc'>{props.desc}</p>
    </div>
  )
}

export default SCard