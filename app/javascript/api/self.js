import axios from 'axios';

const token = localStorage.getItem('todo-token') || '';
export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: token,
    'Content-Type': 'application/json',
  },
});
