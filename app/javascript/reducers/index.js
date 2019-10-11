import { combineReducers } from 'redux';
import greeting from './greeting';
import task from './task';
import session from './session';

const reducers = combineReducers({ greeting, task, session });

export default reducers;
