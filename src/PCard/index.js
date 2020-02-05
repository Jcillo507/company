import React from 'react'

const PCard = (props) => {
  return (
    <div className='pcard-ctr'>
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
      <h4>{props.email}</h4>
      <h4>phone number</h4>
    </div>
  )
}

export default PCard