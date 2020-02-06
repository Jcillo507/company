import React from 'react'
import './scard.scss'

const SCard = (props) => {
  return (
    <div className='services-card'>
      {/* <img src={props.image} /> */}
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  )
}

export default SCard