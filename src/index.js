import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import LoadingBar from 'react-redux-loading'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import combineReducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers)
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
const persistor = persistStore(store)

//const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={LoadingBar} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
document.getElementById('root')
)
