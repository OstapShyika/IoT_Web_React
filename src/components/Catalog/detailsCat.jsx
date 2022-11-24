import React from 'react'
import mov from '../../images/Dark-Knight-70822-scaled-768x1137.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './catalog.css'

export default function DetailsCat(props) {
    let sortBy = props.sortProps.sortBy;
    let sortOrder = props.sortProps.sortingOrder;
    let searchValue = props.searchValue;
    const [detailsList, setDetailsList] = useState([{ 'price': 300, 'description': 'Cool movie' },
    { 'price': 8, 'description': 'But Im better!' },
    { 'price': 2, 'description': 'How do I type an apostrophy there?!' },
    { 'price': 20, 'description': 'Description description description' },
    { 'price': 69, 'description': 'Stuff' },
    { 'price': 40, 'description': 'More stuff' }]);
    let sortedDetailss = [];
    let foundDetailss = detailsList.filter(details => details.description.search(searchValue) !== -1);
    if (sortBy === 'Price') {
        if (sortOrder === 'Ascending') {
            sortedDetailss = foundDetailss.sort(function (a, b) {
                return a.price > b.price ? 1 : -1;
            })
        }
        if (sortOrder === 'Descending') {
            sortedDetailss = foundDetailss.sort(function (a, b) {
                return a.price < b.price ? 1 : -1;
            })
        }
    } else {
        sortedDetailss = foundDetailss;
    }

    let renderedDetailss = sortedDetailss.map((details) =>
        <div className='block' key={detailsList.indexOf(details)}>
            <img src={mov} alt="movie" className='item-img' />
            <h1>The Dark Night</h1>
            <div className='description'>{details.description}</div>
            <div>Price: {details.price} $</div>
            <Link to='/details' state={{ price: details.price, description: details.description }}>
                <button className='view-more-btn'>View more</button>
            </Link>
        </div>);

    return (
        <div className='catalog-items'>
            {renderedDetailss}
        </div>
    )
}
