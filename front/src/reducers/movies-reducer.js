import { FIND_MOVIES } from "../constants";

const initialState = {
  movies: []  
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_MOVIES:
      return {...state,  movies: action.movies };
      default:
        return state
  }
};
