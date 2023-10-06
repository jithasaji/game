import React from 'react'
import '../App.css';

function Squares({value,choice}) {
  return (
    <div className='square' onClick={choice}>
      {value}
    </div>
  )
}

export default Squares
