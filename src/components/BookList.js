import React, { PropTypes } from 'react';
import Book from './Book';
import {connect} from "react-redux";

@connect((state) => ({
  navClosed: state.navClosed,
  books: state.books,
  selectedFilter: state.selectedFilter,
  searchValue: state.searchValue
}))
class BookList extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    selectedFilter: PropTypes.string,
    navClosed: PropTypes.bool.isRequired,
  };

  render() {
    const {selectedFilter, navClosed, books, searchValue} = this.props;

    let className = 'gallery';

    if (!navClosed) {
      className += ' filter-is-visible';
    }

    return (
        <section className={ className }>
          { books.filter(book => {
            return (
              !selectedFilter ||
              selectedFilter === 'All' ||
              book.category === selectedFilter
            ) && (
              !searchValue ||
              book.title.toLowerCase().includes(searchValue.toLowerCase())
            );
          }).map( book => <Book key={ book.title } source={ book }/>)}
        </section>
    );
  }
}

export default BookList;
