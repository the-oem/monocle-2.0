import React, { Component } from 'react';
import './filter.scss';

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // append recent locations from previous searches
    return (
      <aside className='filter-aside'>
        <h2>Your Recent Searches</h2>
        <ul className='recent-search-list'>
          <li>
            <label>
              <input
                className='recent-search-checkbox'
                type="checkbox"
              />
              Denver
            </label>
          </li>
          <li>
            <label>
              <input
                className='recent-search-checkbox'
                type="checkbox"
              />
              Austin
            </label>
          </li>
          <li>
            <label>
              <input
                className='recent-search-checkbox'
                type="checkbox"
              />
              San Francisco
            </label>
          </li>
          <li>
            <label>
              <input
                className='recent-search-checkbox'
                type="checkbox"
              />
              Nashville
            </label>
          </li>
        </ul>
      </aside>
    );
  }
}
