import React, { PropTypes } from 'react';


const FilterItems = ({ filters, selectedFilter, selectTab }) => {

  const FilterList = filters.map(filter => {
    return (
      <li key={ filter } onClick={ () => selectTab(filter) } style={{ display: 'inline-style' }}>
        <a className={ filter === selectedFilter ? 'selected' : null } href="#0">{ filter }</a>
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
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedFilter: PropTypes.string,
  selectTab: PropTypes.func.isRequired,
};

export default FilterItems;

