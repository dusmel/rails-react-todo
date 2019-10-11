const initialState = {
  greeting: {
    greet: 'Hello',
  },
  session: {
    isLoggedIN: !!localStorage.getItem('todo-token'),
    user: {},
  },
};

export default initialState;
