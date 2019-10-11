import { SIGNUP, LOGIN } from '../actionTypes/session';

const session = (state = {}, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      return {
        ...state,
        ...payload,
      };
    case LOGIN:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default session;
