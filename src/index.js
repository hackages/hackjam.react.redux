import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/reset.css';
import './css/style.css';
import {combineReducers, createStore} from "redux";
import {Provider} from 'react-redux';
import filters from "./mocks/filters";

const tabFilterReducer = (state = filters[0], action) => {
  if (action.type === 'SELECT_FILTER') {
    return action.payload;
  }
  return state;
};

const reducers = combineReducers({
  selectedFilter: tabFilterReducer,
  foo: (state = [], action) => state
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
