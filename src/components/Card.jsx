import React from 'react'


function Card(props) {
  return (
    <div className='card'>
      <img src={props.images[props.currentCount]} alt="" />
      <h2>img count: {props.currentCount}</h2>
    </div>
  )
}

export default Card
