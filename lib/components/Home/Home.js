import React, { Component } from 'react';
import './Home.scss';
import AccountModal from '../AccountModal/AccountModal';
import Search from '../Search/Search';
import Nav from '../Nav/Nav';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='background-container'>
        <Nav accountStatus={'LOG IN'} />
        <div className='opaque-container'>
          <h1 className='tagline'>The Job Board of Your Dreams</h1>
          <Search />
        </div>
      </div>
    );
  }
}
