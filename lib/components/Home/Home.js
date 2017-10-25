import React, { Component } from 'react';
import './Home.scss';

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
          <div className='login-join'>
            <a className='log-in' href='#'>LOG IN</a>
            <p>or</p>
            <a className='join' href='#'>JOIN</a>
          </div>
        </nav>
        <main>
          <input type='text' placeholder='Enter city, state or zip code' />
          <select name="radius" id="radius-selector">
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