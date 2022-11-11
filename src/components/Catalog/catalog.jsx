import React from 'react'
import './catalog.css'
import mov from '../../images/Dark-Knight-70822-scaled-768x1137.jpg'

export default function Catalog() {
  const items = [8, 4, 1, 6];
  const filteredItems = items.map((item) =>
    <div className='catalog-item'>
      <img src={mov} alt="movie poster" className='item-img'/>
      <h1>The Dark Night</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
      <div><strong>Price:</strong> {item}$</div>
      <button className='view-more-btn'>View More</button>
    </div>
    )
    console.log(filteredItems);
  return (
    <div className='Catalog'>
      <div className="filter-menu">
        <div className="filters">
          <select name="Sort" id="sort-by">
            <option selected disabled hidden value="tit">Sort by</option>
            <option value="price">Price</option>
          </select>
          <select name="Order" id="order">
          <option selected disabled hidden value="tit">Order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Decending</option>
          </select>
        </div>
        <button className='apply-btn'>Apply</button>
      </div>
      <hr className='catalog-hr'/>
      <div className="catalog-items">
          {filteredItems}
      </div>
      <hr className='catalog-hr'/>
    </div>
  )
}
