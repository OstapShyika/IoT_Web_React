import {useDispatch, useSelector} from "react-redux";
import './cart.css';
import mov from '../../images/Dark-Knight-70822-scaled-768x1137.jpg';
import {addMovie, removeMovie} from "../../store/reducer";
import { Link } from "react-router-dom";

export default function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    let movieList = cart.movies;
    let totalPrice = 0;
    const increase = (movie) => {
        dispatch(addMovie(movie))
    }
    const decrease = (movie) => {
        dispatch(removeMovie(movie))
    }
    if (cart.movies.length === 0) {
        return (<div className='Cart'></div>)
    } else {
        for (let i of cart.movies) {
            totalPrice += i.amount * i.price;
        }
        let moviesHtmlList = movieList.map((movie) => {
            return (
                <>
                    <div className='item' key={movieList.indexOf(movie)}>
                        <img src={mov} alt="movie" className='item-img'/>
                        <div className='description'>{movie.description}</div>
                        <div className="cart-edit">
                        <button onClick={() => {
                            increase(movie)
                        }}>+
                        </button>
                        <div className='amount'>{movie.amount}</div>
                        <button onClick={() => {
                            decrease(movie)
                        }}>-
                        </button>
                        <div className='price'>{movie.price}$</div>
                        </div>
                    </div>
                </>
            )
        })
        return (<div className='Cart'>
                <div>{moviesHtmlList}</div>
                <div className='total-price'>Total price: {totalPrice} $</div>
                <div className="cart-buttons">
                        <Link to="/catalog">
                            <button className="cart-catalog" variant="light">Back to Catalog</button>
                        </Link>
                        <button className="cart-continue" variant="dark">Continue</button>
                </div>
                <hr className='header-hr'/>
            </div>
        )
    }
}