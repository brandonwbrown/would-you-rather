import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import combineReducers from '../reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { LOG_OUT } from '../actions/authedUser'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = ( state, action ) => {
  if ( action.type === LOG_OUT ) {
    state = undefined;
  }
  return combineReducers(state, action)
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
export const persistor = persistStore(store)
