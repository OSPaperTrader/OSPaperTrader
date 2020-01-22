import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './Reducers/reducer';
import './styles.scss';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { mainSaga } from './sagas/sagas';

// const store = createStore(reducers, composeWithDevTools())
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mainSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
