import { FIND_MOVIE } from "../constants";

const initialState = {
  movie: {} 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_MOVIE:
      return {...state,  movie: action.movie };
      default:
        return state
  }
};
