import axios from "axios";
import {FIND_MOVIE} from '../constants'

const receiveMovie = (movie) => ({
  type: FIND_MOVIE,
  movie,
});


export const fetchMovie = (str) => dispatch => 
  axios.get(`http://www.omdbapi.com/?apikey=20dac387&i=${str}`)
    .then((res) => res.data)
    .then((data) => dispatch(receiveMovie(data)));



