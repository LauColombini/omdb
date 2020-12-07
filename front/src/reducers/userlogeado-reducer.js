import {USER_DESLOGEADO, USER_LOGEADO} from "../constants";

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGEADO:
      return action.data
    case USER_DESLOGEADO:
      return {}    
      default:
        return state
  }
};
