import React from 'react'

function Button(props) {
  return (
      <button onClick={props.changePic}>{props.symbol}</button>

  )
}

export default Button
