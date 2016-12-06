import React, { Component, PropTypes } from 'react';
import filters from '../mocks/filters';
import books from '../mocks/books';
import BookList from './BookList';
import SideBarFilters from './SideBarFilters';
import FilterMenu from './FilterMenu';
import {connect} from "react-redux";
import ActionTypes from "../actions";

const mapDispatchToProps = (dispatch) => ({
  addBooks(books) {
    dispatch({
      type: ActionTypes.ADD_BOOKS,
      payload: books
    });
  }
});

@connect(null, mapDispatchToProps)
class Main extends Component {
  componentDidMount() {
    this.props.addBooks(books);
  }

  render () {
    return (
     <main className="main-content">
      <FilterMenu filters={ filters } />
      <BookList/>
      <SideBarFilters />
    </main>
   );
  }
}

export default Main;
