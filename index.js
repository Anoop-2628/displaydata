import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  { Provider }  from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {CombineReducer} from './CountryList/Reducer'
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
const store = createStore(CombineReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
  <React.StrictMode>
    <Provider  store={store}>
       <App />
    </Provider >
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
