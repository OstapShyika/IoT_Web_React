import React from 'react'
import mov from '../../images/Dark-Knight-70822-scaled-768x1137.jpg'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './catalog.css'
import {getMovies} from "../../API";
import Loader from "../Loader/loader";

export default function DetailsCat(props) {
    let sortBy = props.sortProps.sortBy;
    let sortOrder = props.sortProps.sortingOrder;
    let searchValue = props.searchValue;
    let [detailsList, setDetailsList] = useState([]);
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 3000);
    useEffect(() => {
        getMovies(sortBy, sortOrder).then(res => {
            let detailsList = [];
            for (let i of res.data.movie) {
                detailsList.push({id: i[0], description: i[1], price: i[2]})
            }
            setDetailsList(detailsList);
        })
    }, [sortOrder, sortBy]);
    let foundDetailss = detailsList.filter(details => details.description.search(searchValue) !== -1);
    let renderedDetailss = foundDetailss.map((details) =>
        <div className='item' key={detailsList.indexOf(details)}>
            <img src={mov} alt="movie" className='item-img' />
            <h1>The Dark Night</h1>
            <div className='description'>{details.description}</div>
            <div>Price: {details.price} $</div>
            <Link to='/details' state={{ id: details.id, price: details.price, description: details.description }}>
                <button className='view-more-btn'>View more</button>
            </Link>
        </div>);

    return (
        <>
            {loading ? <Loader/> :
                <div className='catalog-items'>
                {renderedDetailss}
            </div>}
        </>
    )
}
