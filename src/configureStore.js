/**
 * Dependencies
 */
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


/**
 * Reducers
 */
import appReducer from './reducers'

/**
 * persist Config
 * @typedef {Object}
 */
const persistConfig = {
    key: 'root',
    storage,
}

/**
 * persisted Reducer
 * @typedef {Function} persistedReducer
 */
const persistedReducer = persistReducer(persistConfig, appReducer)

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

/**
 * redux store
 * @typedef {Function} persistedReducer
 */
const store = createStore(
    persistedReducer,
    undefined,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
)

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => store.replaceReducer(appReducer))
}

export const persistor = persistStore(store)

export default store