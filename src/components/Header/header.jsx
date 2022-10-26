import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div>
        <div className='header'>
            <div className="label">XXXCinema</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Catalog</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </div>
        <hr className='header-hr'/>
    </div>
  )
}
