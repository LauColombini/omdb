import axios from 'axios';
import { USER_DESLOGEADO } from '../constants';

const disconect = () => {
  return {
    type: USER_DESLOGEADO,    
  }
}

export const userLogOut = () => dispatch =>
  axios.post(`/api/logout`)
    .then(() => dispatch(disconect()));