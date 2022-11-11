import React from 'react'
import logo_img from '../../images/a9d5ff36fafc84be72b51f8533be4861.png'
import './home.css'
import Item from '../Item/item'

export default function Home() {
  return (
    <div>
      <div className='home'>
        <img src={logo_img} alt="movie pic" />
          
        <div className="home-text">
          <h1>Header</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam nemo vel, architecto esse temporibus magnam voluptates. Suscipit, saepe! Modi laborum deleniti repudiandae nulla labore odio nam qui maiores saepe.</p>
        </div>
      </div>
      <div className="items-comp">
        <Item />
        <Item />
        <Item />
      </div>
      <button className='view-more-btn'>View More</button>
      <hr className='home-hr'/>
    </div>
  )
}
