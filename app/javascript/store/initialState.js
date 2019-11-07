import decodeToken from '../config/helpers';

const initialState = {
  greeting: {
    greet: 'Hello',
  },
  session: {
    isLoggedIN: !!localStorage.getItem('todo-token'),
    user: decodeToken(),
  },
};

export default initialState;
