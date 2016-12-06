import React, { PropTypes } from 'react';

const SideBarFilters = ({ navClosed, onChange, closeSideBar, openSideBar }) => {
  return (
    <div>
      <div className={ !navClosed ? 'filter filter-is-visible': 'filter' }>
        <form>
				  <div className="filter-block">
					  <h4>Search</h4>
					  <div className="filter-content">
						  <input type="search" placeholder="title, price..." onChange={ onChange }/>
					  </div>
				  </div>
        </form>
        <a href="#0" className="close" onClick={ closeSideBar }>Close</a>
      </div>

      <a href="#0" className="filter-trigger" onClick={ openSideBar }>Filters</a>
    </div>
  );
};

SideBarFilters.propTypes = {
  navClosed: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  closeSideBar: PropTypes.func.isRequired,
};

export default SideBarFilters;

