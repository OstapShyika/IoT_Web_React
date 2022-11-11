import React from 'react'
import './item.css'
import mov from '../../images/Dark-Knight-70822-scaled-768x1137.jpg'

export default function Item() {
  return (
    <div className='item'>
      <img src={mov} alt="movie poster" className='item-img'/>
      <h1>The Dark Night</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
    </div>
  )
}
