import React, { PropTypes } from 'react';
import FilterItems from './FilterItems';

const FilterMenu = ({ selectTab, selectedFilter, filters }) => {
  return (
    <div className="tab-filter-wrapper">
      <div className="tab-filter">
        <FilterItems selectedFilter={ selectedFilter } filters={ filters } selectTab={ selectTab } />
      </div>
	  </div>
  );
};

FilterMenu.propTypes = {
  selectTab: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterMenu;
