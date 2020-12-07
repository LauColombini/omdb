import axios from 'axios';
import { USER_LOGEADO } from '../constants';

const reciveUser = (data) => {
  return {
    type: USER_LOGEADO,
    data
  }
}

export const userLogin = (usuario) => dispatch =>
  axios.post(`/api/login`, usuario)
    .then(res => res.data)
    .then(user => dispatch(reciveUser(user)));
