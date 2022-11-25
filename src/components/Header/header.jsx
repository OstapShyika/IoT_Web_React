import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

export default function Header() {
  return (
    <div>
        <div className='header'>
            <div className="label">XXXCinema</div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/catalog'>Catalog</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                </ul>
            </nav>
        </div>
        <hr className='header-hr'/>
    </div>
  )
}
