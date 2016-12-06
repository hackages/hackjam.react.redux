import React, { PropTypes } from 'react';

const FilterItems = ({ filters, selectTab }) => {

  const FilterList = filters.map(filter => {
    return (
      <li key={ filter.category } onClick={ () => selectTab(filter.category) } style={{ display: 'inline-style' }}>
        <a className={ filter.selected ? 'selected': '' } href="#0">{ filter.category }</a>
      </li>
    );
  });

  return (
    <ul>
      <li className="placeholder">
        <a data-type="all" href="#0">All</a>
      </li>
      {FilterList}
    </ul>
  );
};

FilterItems.propTypes = {
  filters: PropTypes.array.isRequired,
  selectTab: PropTypes.func.isRequired,
};

export default FilterItems;

