import axios from 'axios';
import { FETCH_ALL_TASKS, CREATE_NEW_TASK } from '../actionTypes/task';

export const fetchTasks = () => dispatch => {
  // Do some actions
  axios
    .get('v1/tasks')
    .then(response => {
      const payload = response.data;
      console.log('action', payload);
      dispatch({
        type: FETCH_ALL_TASKS,
        payload,
      });
    })
    .catch(error => console.log(error));
};

export const createTask = data => dispatch => {
  // Do some actions
  axios
    .post('v1/task', data)
    .then(response => {
      const payload = response.data;
      dispatch({
        type: CREATE_NEW_TASK,
        payload,
      });
    })
    .catch(error => console.log(error));
};
