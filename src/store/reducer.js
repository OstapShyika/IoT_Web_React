import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {movies: []},
    reducers: {
        addMovie(state, action){
            const movieIndex = state.movies.findIndex(movie => movie.id === action.payload.id);
            if(movieIndex === -1){
                state.movies.push({
                    id: action.payload.id,
                    description: action.payload.description,
                    price: action.payload.price,
                    amount: action.payload.amount
                });
            } else {
                state.movies[movieIndex].amount += 1;
            }

        },
        removeMovie(state, action){
            const movieIndex = state.movies.findIndex(movie => movie.id === action.payload.id);
            state.movies[movieIndex].amount -= 1;
            if(state.movies[movieIndex].amount === 0){
                state.movies.splice(movieIndex, 1);
            }
        }
    }
});
export const {addMovie, removeMovie} = cartSlice.actions;
export default cartSlice.reducer;