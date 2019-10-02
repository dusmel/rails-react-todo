import axios from 'axios';
import { FETCH_ALL_TASKS, CREATE_NEW_TASK } from '../actionTypes/task';

export const fetchTasks = () => dispatch => {
  // Do some actions
  axios
    .get('v1/tasks', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNTcwMDMyMjA5LCJleHAiOjE1NzAwNzU0MDksImp0aSI6IjliZGU2ZDQ0LTM2MjMtNDIwZi05N2EyLTExYzM3OTRkNjI1NiJ9.7HMbIA5jxUvrpnI82bf7ozL0Ua5bWErzHc5sES9UaCE',
      },
    })
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
    .post('v1/task', data, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNTcwMDMyMjA5LCJleHAiOjE1NzAwNzU0MDksImp0aSI6IjliZGU2ZDQ0LTM2MjMtNDIwZi05N2EyLTExYzM3OTRkNjI1NiJ9.7HMbIA5jxUvrpnI82bf7ozL0Ua5bWErzHc5sES9UaCE',
      },
    })
    .then(response => {
      const payload = response.data;
      dispatch({
        type: CREATE_NEW_TASK,
        payload,
      });
    })
    .catch(error => console.log(error));
};
