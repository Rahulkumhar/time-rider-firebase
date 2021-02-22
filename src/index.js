import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore,applyMiddleware,compose } from 'redux'

import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import rootReducer from './reducers';

React.icons = icons
const middleWare = [thunk];
const store = createStore(rootReducer, compose(applyMiddleware(...middleWare,logger)))
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
