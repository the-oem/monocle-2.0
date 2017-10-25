import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='background-container'>
        <nav>
          <img src='#' alt='Turing logo'/>
        </nav>
        <main>
          <input type='text' placeholder='Enter city, state or zip code' />
          <select name="radius" id="#">
            <option value="Radius">Radius</option>
            <option value="10">10 miles</option>
            <option value="20">20 miles</option>
            <option value="50">50 miles</option>
            <option value="100">100 miles</option>
          </select>
          <button className='search-btn'>Search</button>
        </main>
      </div>
    );
  }
}
