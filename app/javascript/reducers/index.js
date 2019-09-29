import { combineReducers } from 'redux';
import greeting from './greeting';
import task from './task';

const reducers = combineReducers({ greeting, task });

export default reducers;
