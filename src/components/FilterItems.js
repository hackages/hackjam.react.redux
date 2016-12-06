import React, { PropTypes } from 'react';
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  selectedFilter: state.selectedFilter
});

const mapDispatchToPros = (dispatch) => ({
  selectFilter(name) {
    dispatch({type: 'SELECT_FILTER', payload: name});
  }
});

@connect(mapStateToProps, mapDispatchToPros)
class FilterItems extends React.Component {
  static propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedFilter: PropTypes.string,
    selectFilter: PropTypes.func.isRequired,
  };

  render() {
    const {filters, selectedFilter, selectFilter} = this.props;

    const FilterList = filters.map(filter => {
      return (
          <li key={ filter } onClick={ () => selectFilter(filter) } style={{ display: 'inline-style' }}>
            <a className={ filter === selectedFilter ? 'selected' : null } href="#0">{ filter }</a>
          </li>
      );
    });

    return <ul>
      <li className="placeholder">
        <a data-type="all" href="#0">All</a>
      </li>
      {FilterList}
    </ul>;
  }
}

export default FilterItems;

