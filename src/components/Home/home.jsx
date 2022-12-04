import React from 'react'
import logo_img from '../../images/a9d5ff36fafc84be72b51f8533be4861.png'
import './home.css'
import Items from './items.jsx'
import { useState } from 'react'

export default function Home() {
  let [items, setItems] = useState([{ description: 'The Dark Knight is a 2008 superhero film' },
    { description: 'Based on the DC Comics superhero' },
    { description: 'In writing the screenplay, the Nolans were influenced by 1980s Batman comics' }]);

  return (
    <div>
      <div className='home'>
        <img src={logo_img} alt="movie pic" />
          
        <div className="home-text">
          <h1>Header</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam nemo vel, architecto esse temporibus magnam voluptates. Suscipit, saepe! Modi laborum deleniti repudiandae nulla labore odio nam qui maiores saepe.</p>
        </div>
      </div>
      <Items items={items} className='items-comp'></Items>
      <button className='view-more-btn' onClick={() =>
          setItems([{ description: 'The Dark Knight is a 2008 superhero film' },
          { description: 'Based on the DC Comics superhero' },
          { description: ' In writing the screenplay, the Nolans were influenced by 1980s Batman comics' },
          { description: 'The Dark Knight was the first major motion picture to be filmed with high-resolution IMAX cameras' },
          { description: 'Since its release, The Dark Knight has been assessed as one of the greatest superhero films ever made' },
          { description: 'Cool movie' },
          { description: 'You should see it' }])
      }>View more</button>
      <hr className='home-hr'/>
    </div>
  )
}
