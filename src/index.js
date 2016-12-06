import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/reset.css';
import './css/style.css';
import {combineReducers, createStore} from "redux";
import {Provider} from 'react-redux';
import filters from "./mocks/filters";
import ActionTypes from "./actions";

const tabFilterReducer = (state = filters[0], action) => {
  if (action.type === ActionTypes.SELECT_FILTER) {
    return action.payload;
  }
  return state;
};

const searchValueReducer = (state = null, action) => {
  if (action.type === ActionTypes.SEARCH) {
    return action.payload;
  }
  return state;
};

const booksReducer = (state = [], action) => {
  if (action.type === ActionTypes.ADD_BOOKS) {
    return [...action.payload];
  }
  return state;
};

const sidebarReducer = (state = true, action) => {
  if (action.type === ActionTypes.TOGGLE_SIDEBAR) {
    return !state;
  }
  return state;
}

const reducers = combineReducers({
  selectedFilter: tabFilterReducer,
  searchValue: searchValueReducer,
  books: booksReducer,
  navClosed: sidebarReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
