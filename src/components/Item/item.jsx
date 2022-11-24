import React from 'react'
import './item.css'
import mov from '../../images/Dark-Knight-70822-scaled-768x1137.jpg'

export default function Item(props) {
  return (
    <div className='item'>
      <img src={mov} alt="movie poster" className='item-img'/>
      <h1>The Dark Night</h1>
      <p>{props.description}</p>
    </div>
  )
}
