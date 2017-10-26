import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='location-search'>
        <input className='location-input' type='text' placeholder='Enter city, state or zip code' />
        <select name="radius" id="radius-selector">
          <option value="Radius">Radius</option>
          <option value="10">10 miles</option>
          <option value="20">20 miles</option>
          <option value="50">50 miles</option>
          <option value="100">100 miles</option>
        </select>
        <button className='search-btn'>Search</button>
      </div>
    );
  }
}
