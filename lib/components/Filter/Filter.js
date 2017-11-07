import React, { Component } from 'react';
import container from '../../containers/container';
import './Filter.scss';

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
    return (
      <aside className='filter-aside'>
        <h2>Your Recent Job Searches</h2>
        <ul className='recent-search-list'>
          { this.state.recentSearches ? this.handleRecentSearchDisplay() : null }
        </ul>
        <hr />
        <h2>Filter by...</h2>
        <ul className='filter-list'>
          <li>
            <label>
              <input
                className='filter-checkbox'
                type="checkbox"
              />
            Favorites
            </label>
          </li>
          <li>
            <label>
              <input
                className='filter-checkbox'
                type="checkbox"
              />
            Remote
            </label>
          </li>
        </ul>
      </aside>
    );
  }
}

export default container(Filter);
