import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import filters from '../mocks/filters';
import books from '../mocks/books';
import BookList from './BookList';
import SideBarFilters from './SideBarFilters';
import FilterMenu from './FilterMenu';

class Main extends Component {
  constructor () {
    super();
    
    this.state = {
      books,
      filters,
      navClosed: true,
    };
  }

  selectTab (category) {
    this.setState({
      filters,
      books,
    });
  }

  closeSideBar () {
    this.setState({
      navClosed: true,
    });
  }

  openSideBar () {
    this.setState({
      navClosed: false,
    });
  }

  search (input) {
    const value = input.target.value;
    this.setState({
      books,
    });
  }

  render () {
    const { books, filters, navClosed } = this.state;

    return (
     <main className="main-content">

      <FilterMenu />

      <BookList />

      <SideBarFilters />
    </main>
   );
  }
}

export default Main;
