import React, { PropTypes } from 'react';
import FilterItems from './FilterItems';

const FilterMenu = ({ filters }) => {
  return (
    <div className="tab-filter-wrapper">
      <div className="tab-filter">
        <FilterItems filters={ filters } />
      </div>
	  </div>
  );
};

FilterMenu.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterMenu;
