/**
 * Dependencies
 */
import { combineReducers } from 'redux'


/*
  Reducers
 */
import dataSource from './dataSource'

/**
 * App Reducer
 * @typedef {Function} appReducer
 */
const Reducers = combineReducers({
    dataSource
})

export default Reducers