import React from 'react'
import './pcard.scss'

const PCard = (props) => {
  return (
    <div className='p-card-ctr'>
      <img src={props.image} className='p-card-img' />
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
      <h4>{props.email}</h4>
      <h4>phone number</h4>
    </div>
  )
}

export default PCard