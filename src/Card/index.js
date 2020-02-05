import React from 'react'

const Card = (props) => {
  return (
    <div>
      {/* <img src={props.image} /> */}
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  )
}

export default Card