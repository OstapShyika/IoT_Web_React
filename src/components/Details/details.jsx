import React from 'react'
import { useLocation } from 'react-router-dom'
import mov from '../../images/Dark-Knight-70822-scaled-768x1137.jpg'
import { Link } from 'react-router-dom'
import './details.css'

export default function Details() {
    const location = useLocation();
    const state = location.state;
    return (
        <>
            {state && (
                <div className='details-page'>
                    <div className='details-desc'>
                        <img src={mov} alt="movie" />
                        <aside>
                            <h2>The Dark Night</h2>
                            <div>{state.description}</div>
                        </aside>
                    </div>
                    <div className='business'>
                        <div className='price'>Price: {state.price} $</div>
                        <div className='buttons'>
                            <Link to='/catalog'>
                                <button>Go back</button>
                            </Link>
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )    
}
