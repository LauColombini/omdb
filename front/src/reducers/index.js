import { combineReducers } from 'redux';
import movieReducer from './movie-reducer';
import moviesReducer from './movies-reducer'
import userLogeado from './userlogeado-reducer'
import favoritesReducer from './favorites-reducer'

export default combineReducers({
    movies: moviesReducer,
    movie: movieReducer,
    userLog: userLogeado,
    pepe: userLogeado,
    favoritesReducer
})