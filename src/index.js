import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import LoadingBar from 'react-redux-loading'
import {store, persistor} from './utils/configureStore'


// for debug only
window.persistor = persistor
//const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={LoadingBar} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
document.getElementById('root')
)
