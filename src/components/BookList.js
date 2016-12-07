import React, { PropTypes } from 'react';;
import Book from './Book';

const BookList = ({ books, navClosed }) => {
    let className = 'gallery';

    if (!navClosed) {
      className += ' filter-is-visible';
    }

  return (
    <section class={ className }>
      { books.map( book => <Book source={ book }/>)}
    </section>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  navClosed: PropTypes.bool.isRequired,
};

export default BookList;


