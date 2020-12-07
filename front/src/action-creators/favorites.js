import axios from "axios";
import { SHOW_FAVORITES } from "../constants";

const showToFavorites = (favorite) => {
  return {
    type: SHOW_FAVORITES,
    favorite,
  };
};

export const addFavorites = (favMovie) =>
  axios.post(`/api/favorites`, favMovie);

export const fetchFavorites = (userID) => (dispatch) =>
  axios
    .get(`/api/favorites/${userID}`)
    .then((res) => res.data)
    .then((fav) => dispatch(showToFavorites(fav)));

export const deleteFavorite = (id) => axios.delete(`/api/delete/${id}`);
