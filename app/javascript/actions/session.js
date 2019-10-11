import axios from 'axios';
import { LOGIN, SIGNUP } from '../actionTypes/session';

export const signup = data => dispatch => {
  // Do some actions
  axios
    .post('signup', data)
    .then(response => {
      const { authorization } = response.headers;
      localStorage.setItem('todo-token', authorization);
      const payload = response.data;
      dispatch({
        type: SIGNUP,
        payload: {
          isLoggedIN: true,
          user: payload,
        },
      });
    })
    .catch(error => console.error(error));
};

export const login = data => dispatch => {
  // Do some actions
  axios
    .post('login', data)
    .then(response => {
      const { authorization } = response.headers;
      localStorage.setItem('todo-token', authorization);
      const payload = response.data;
      dispatch({
        type: LOGIN,
        payload: {
          isLoggedIN: true,
          user: payload,
        },
      });
    })
    .catch(error => console.error(error));
};
