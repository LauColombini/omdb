import {ADD_FAVORITES, DELETE_FAVORITES, SHOW_FAVORITES} from "../constants";

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {   
    case ADD_FAVORITES:
      return {}
    case DELETE_FAVORITES:
      return {}
    case SHOW_FAVORITES:
        return {}
      default:
        return state
  }
};
