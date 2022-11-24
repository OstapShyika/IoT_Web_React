import React from 'react'
import './catalog.css'
import { useState } from 'react'
import DetailsCat from './detailsCat.jsx'

export default function Catalog() {
  const [sortBy, setSortBy] = useState('Sort by');
    const [sortOrder, setSortOrder] = useState('Sorting order');
    const [searchValue, setSearchValue] = useState('');
    const [sortProps, setSortProps] = useState({ sortBy: '', sortingOrder: '' })


    return (
        <div className='Catalog'>
            <div className="filter-menu">
              <div className="filters">
                <select name="Filter 1" id="select1" onChange={(value) => setSortBy(value.target.value)}>
                    <option value="Sort by">Sort by</option>
                    <option value="Price">Price</option>
                </select>
                <select name="Filter 2" id="select2" onChange={(value) => setSortOrder(value.target.value)}>
                    <option value="Sorting order">Sorting order</option>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
              </div>
              <button onClick={() => setSortProps({ sortBy: sortBy, sortingOrder: sortOrder })} className='apply'>Apply</button>
              <input type="text" placeholder="Search" onChange={(value) => setSearchValue(value.target.value)} />
            </div>
            <hr className='catalog-hr'/>
            <DetailsCat sortProps={sortProps} searchValue={searchValue}></DetailsCat>
            <hr className='catalog-hr'/>
        </div>
    )
}
