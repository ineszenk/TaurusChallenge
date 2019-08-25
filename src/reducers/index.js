/**
 * Dependencies
 */
import { combineReducers } from 'redux'


/*
  Reducers
 */
import appReducer from './itemSearched'
import dataSource from './dataSource'

/**
 * App Reducer
 * @typedef {Function} appReducer
 */
const Reducers = combineReducers({
    appReducer, dataSource
})

export default Reducers