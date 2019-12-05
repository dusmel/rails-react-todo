import cogoToast from 'cogo-toast';
import api from '../api/self';
import { FETCH_ALL_TASKS, CREATE_NEW_TASK } from '../actionTypes/task';

export const fetchTasks = () => dispatch => {
  api
    .get('v1/tasks')
    .then(response => {
      const payload = response.data;
      dispatch({
        type: FETCH_ALL_TASKS,
        payload,
      });
    })
    .catch(error => console.error(error));
};

export const createTask = data => dispatch => {
  api
    .post('v1/task', data)
    .then(response => {
      cogoToast.success('This is a success message', { position: 'top-right' });
      const payload = response.data;
      dispatch({
        type: CREATE_NEW_TASK,
        payload,
      });
    })
    .catch(error => console.error(error));
};
