import React, { Component } from 'react';
import firebase from 'firebase';
import '../../utils/firebase';
import './Nav.scss';

const logo = require('../../assets/monocle_icon.png');

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      accountStatus: 'LOG IN',
    };
    this.handleLoginLogout = this.handleLoginLogout.bind(this);
  }

  handleLoginLogout() {
    const auth = firebase.auth();
    const user = firebase.auth().currentUser;
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    if (!user) {
      auth.signInWithRedirect(googleProvider)
      .then(result => console.log('result', result.credential))
      // .then(res => console.log({ res }));
      // add user to db if not already there
      // update local storage with user
      // grab users jobs from db if there are any
      this.setState({ loggedIn: true, accountStatus: 'LOG OUT' });
    } else {
      firebase.auth().signOut();
      this.setState({ loggedIn: false, accountStatus: 'LOG IN' });
    }
    console.log({ user });
  }

  updateLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  render() {
    return (
      <nav>
        <div className='nav-left'>
          <img className='monocle-logo' src={logo} alt='Monocle logo'/>
          <h1 className='title'>Monocle 2.0</h1>
        </div>
        <a
          className='account-status'
          href='#' onClick={this.handleLoginLogout}>
          {/* {this.props.accountStatus} */}
          {this.state.accountStatus}
        </a>
      </nav>
    );
  }
}
