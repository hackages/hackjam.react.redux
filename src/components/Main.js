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
      navClosed: true,
    };
  }

  @autobind
  closeSideBar () {
    this.setState({
      navClosed: true,
    });
  }

  @autobind
  openSideBar () {
    this.setState({
      navClosed: false,
    });
  }

  @autobind
  search (input) {
    const value = input.target.value;
    this.setState({
      books: books.filter(book => book.title.toLowerCase().includes(value.toLowerCase()))
    });
  }

  render () {
    const { books, navClosed } = this.state;

    return (
     <main className="main-content">

      <FilterMenu filters={ filters } />

      <BookList books={ books } navClosed={ navClosed }/>

      <SideBarFilters
        navClosed={ navClosed }
        closeSideBar={ this.closeSideBar }
        onChange={ this.search }
        openSideBar={ this.openSideBar }
      />
    </main>
   );
  }
}

export default Main;
