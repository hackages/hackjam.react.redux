import React, { PropTypes } from 'react';
import {connect} from "react-redux";
import ActionTypes from "../actions";

const SideBarFilters = ({ navClosed, search, searchValue, toggleSidebar }) => {
  const onChange = (input) => search(input.target.value);
  return (
    <div>
      <div className={ !navClosed ? 'filter filter-is-visible': 'filter' }>
        <form>
				  <div className="filter-block">
					  <h4>Search</h4>
					  <div className="filter-content">
						  <input type="search" placeholder="title, price..." value={searchValue || ''} onChange={ onChange }/>
					  </div>
				  </div>
        </form>
        <a href="#0" className="close" onClick={ toggleSidebar }>Close</a>
      </div>

      <a href="#0" className="filter-trigger" onClick={ toggleSidebar }>Filters</a>
    </div>
  );
};

SideBarFilters.propTypes = {
  navClosed: PropTypes.bool.isRequired,
  search: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
  toggleSidebar: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  searchValue: state.searchValue,
  navClosed: state.navClosed
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar() {
    dispatch({type: ActionTypes.TOGGLE_SIDEBAR});
  },
  search(value) {
    dispatch({type: ActionTypes.SEARCH, payload: value});
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarFilters);
