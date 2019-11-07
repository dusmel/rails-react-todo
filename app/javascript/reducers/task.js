import { FETCH_ALL_TASKS, CREATE_NEW_TASK } from '../actionTypes/task';

const greeting = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_TASKS:
      return {
        ...state,
        ...payload,
      };
    case CREATE_NEW_TASK:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default greeting;
