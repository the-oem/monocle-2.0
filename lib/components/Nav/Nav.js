import React, { Component } from 'react';
import firebase from 'firebase';
import '../../utils/firebase';
import './Nav.scss';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleLoginLogout = this.handleLoginLogout.bind(this);
  }

  handleLoginLogout() {
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
  }

  render() {
    return (
      <nav>
        <div className='nav-left'>
          <img className='monocle-logo' src='lib/assets/monocle_icon.png' alt='Monocle logo'/>
          <h1 className='title'>Monocle 2.0</h1>
        </div>
        <a
          className='account-status'
          href='#' onClick={this.handleLoginLogout}>
          {this.props.accountStatus}
        </a>
      </nav>
    );
  }
};
