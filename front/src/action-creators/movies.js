import axios from "axios";
import {FIND_MOVIES} from '../constants'

const receiveMovies = (movies) => ({
  type: FIND_MOVIES,
  movies,
});


export const fetchMovies = (str) => dispatch =>
  axios.get(`http://www.omdbapi.com/?apikey=20dac387&s=${str}`)
    .then((res) => res.data)
    .then((data) => dispatch(receiveMovies(data.Search)));

