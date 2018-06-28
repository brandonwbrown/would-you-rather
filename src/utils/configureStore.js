import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import combineReducers from '../reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { LOG_OUT } from '../actions/authedUser'
import logger from '../middleware/logger'
import { purgeStoredState } from 'redux-persist'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = ( state, action ) => {
  if ( action.type === LOG_OUT ) {
    state = undefined;
    purgeStoredState(persistConfig)
  }
  return combineReducers(state, action)
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk, logger)))
export const persistor = persistStore(store)
