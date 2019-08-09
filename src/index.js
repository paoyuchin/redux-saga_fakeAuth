import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
// import { helloSaga } from './sagas'
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import rootReducer from './store/reducer/rootReducer';
import 'bootstrap/dist/css/bootstrap.css';
import thunk from 'redux-thunk';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, sagaMiddleware)
);
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
