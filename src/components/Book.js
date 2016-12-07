import React, { PropTypes } from 'react';

const Book = ({ source }) => {
  const book = source;
   return (
     <li>
       <img src={ book.cover }/>
     </li>
   );
}

Book.propTypes = {
  source: PropTypes.object.isRequired
};

export default Book;
