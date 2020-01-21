import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './Reducers/reducer'
import './styles.scss';
import App from './App';
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(reducers, composeWithDevTools())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
