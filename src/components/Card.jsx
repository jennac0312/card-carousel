import React from 'react'


function Card(props) {
  return (
    <div className='card'>
      <img src={props.images[props.currentCount]} alt="" />
    </div>
  )
}

export default Card
