import React, { Component } from 'react';
import container from '../../containers/container';
import './filter.scss';

class Filter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recentSearches.length !== this.props.recentSearches.length) {
      this.setState({ recentSearches: nextProps.recentSearches });
    }
  }

  handleRecentSearchDisplay() {
    return this.state.recentSearches.map((location, i) =>
      <li key={i}>
        <label>
          <input
            className='recent-search-checkbox'
            type="checkbox"
          />
          {location.slice(0, location.length - 5)}
        </label>
        <button className='delete-location-btn'>X</button>
      </li>
    );
  }


  render() {
    // append recent locations from previous searches
    return (
      <aside className='filter-aside'>
        <h2>Your Recent Job Searches</h2>
        <ul className='recent-search-list'>
          { this.state.recentSearches ? this.handleRecentSearchDisplay() : null }
        </ul>
      </aside>
    );
  }
}

export default container(Filter);
