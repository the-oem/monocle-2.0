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
        <Nav />
        <div className='opaque-container'>
          <h1 className='tagline'>Find the Job You've Been LOOKING FOR</h1>
          <Search />
        </div>
      </div>
    );
  }
}
