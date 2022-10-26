import React from 'react'
import './footer.css'
import fb from './Facebook_Logo_(2019).png.webp'
import odnokl from './1200px-Odnoklassniki.svg.png'
import vk from './ВКонтакте.png'

export default function Footer() {
  return (
    <div>
      <div className="first-lvl">
        <div className="text-cont">
            <h1>Watch Now!</h1>
        </div>
        <div className="label-foot">XXXCinema</div>
        <div className="icons">
            <img src={fb} alt="facebook" />
            <img src={odnokl} alt="omg wtf is that" />
            <img src={vk} alt="damn, you must be kiddin" />
        </div>
      </div>
      <hr className='footer-hr' />
      <div className='copyright-text'>Copyright @ 2022 all right reserved</div>
    </div>
  )
}
