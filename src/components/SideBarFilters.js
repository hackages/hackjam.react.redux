import React, { PropTypes } from 'react';

const SideBarFilters = () => {
  return (
    <div>
      <div class={ !navClosed ? 'filter filter-is-visible': 'filter' }>
        <form>
				  <div class="filter-block">
					  <h4>Search</h4>
					  <div class="filter-content">
						  <input type="search" placeholder="title, price..." onChange={ onChange }/>
					  </div>
				  </div>
        </form>
        <a href="#0" class="close" onClick={ closeSideBar }>Close</a>
      </div>

      <a href="#0" class="filter-trigger" onClick={ openSideBar }>Filters</a>
    </div>
  );
};

SideBarFilters.propTypes = {
  navClosed: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  closeSideBar: PropTypes.func.isRequired,
};

export default SideBarFilters;

