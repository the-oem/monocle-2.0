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
      loggedIn: false,
      accountStatus: '',
    };
    this.handleLoginLogout = this.handleLoginLogout.bind(this);
  }

  initApp() {
    const config = {
      apiKey: 'AIzaSyBZnAMeaJQPnyJ6t-LiXaiOUBrZiA5_S_Y',
      authDomain: 'monocle-f260a.firebaseapp.com',
      databaseURL: 'https://monocle-f260a.firebaseio.com',
      projectId: 'monocle-f260a',
      storageBucket: '',
      messagingSenderId: '489669519853',
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ accountStatus: 'LOG OUT' });
      } else {
        this.setState({ accountStatus: 'LOG IN' });
      }
    })
  }

  componentDidMount() {
    this.initApp();
    // add user to db if not already there
    // update local storage with user
    // grab users jobs from db if there are any
    firebase.auth().getRedirectResult()
    .then(result => {
      if (result.credential) {
        console.log('token', result.credential.accessToken);
      }
      console.log('user', result.user);
    })
    .catch(error => console.log({ error }));
  }

  handleLoginLogout() {
    const auth = firebase.auth();
    const user = firebase.auth().currentUser;

    if (user) {
      auth.signOut()
      .then(() => alert('SignOut successful'))
      .catch(error => console.log(error));
    } else {
      auth.signInWithRedirect(googleProvider);
    }
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
          {this.state.accountStatus}
        </a>
      </nav>
    );
  }
}
