import React, { Component } from 'react';
import firebase from 'firebase';
// import '../../utils/firebase';
import './Nav.scss';

const logo = require('../../assets/monocle_icon.png');

// const auth = firebase.auth();
// const user = firebase.auth().currentUser;
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      accountStatus: '',
    };
    this.handleLoginLogout = this.handleLoginLogout.bind(this);
  }


  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ accountStatus: 'LOG OUT' });
      } else {
        this.setState({ accountStatus: 'LOG IN' });
      }
    });
  }

  handleLoginLogout() {
    const auth = firebase.auth();
    const user = firebase.auth().currentUser;
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    if (user) {
      auth.signOut();
      this.setState({ accountStatus: 'LOG IN' });
    } else {
      auth.signInWithPopup(googleProvider)
      .then((result) => {
        const token = result.credential.accessToken;
        console.log({ token });
        const user = result.user;
        console.log({ user });
        this.setState({ accountStatus: 'LOG OUT' });
      })
      .catch((error) => console.log({ error }));
    }
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
          {this.state.accountStatus}
        </a>
      </nav>
    );
  }
}
