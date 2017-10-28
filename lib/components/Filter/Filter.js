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
        <ul>
          <li><label><input type="checkbox"/>Denver</label></li>
          <li><label><input type="checkbox"/>Austin</label></li>
          <li><label><input type="checkbox"/>San Francisco</label></li>
          <li><label><input type="checkbox"/>Nashville</label></li>
        </ul>
      </aside>
    );
  }
}
