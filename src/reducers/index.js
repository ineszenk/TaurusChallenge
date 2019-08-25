/**
 * DEPENDENCIES
 */
import { combineReducers } from 'redux';

/*
  REDUCERS
 */
import dataSource from './dataSource';

/**
 * APP REDUCER
 * @typedef {Function} appReducer
 */
const Reducers = combineReducers({
	dataSource
});

export default Reducers;
