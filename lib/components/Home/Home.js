import React, { Component } from 'react';
import './Home.scss';
import AccountModal from '../AccountModal/AccountModal';
import Search from '../Search/Search';
import firebase from 'firebase';
import '../../utils/firebase';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};

    this.googleSignIn = this.googleSignIn.bind(this);
  }

  googleSignIn() {
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
  }

  render() {
    return (
      <div className='background-container'>
        <nav>
          <div className='nav-left'>
            <img className='turing-logo' src='lib/assets/TuringSchool_LogoMark_White.png' alt='Turing logo'/>
            <h1 className='title'>Monocle 2.0</h1>
          </div>
          <a className='log-in' href='#' onClick={this.googleSignIn}>LOG IN</a>
        </nav>
        <div className='opaque-container'>
          <h1 className='tagline'>The Job Board of Your Dreams</h1>
          <Search />
        </div>
      </div>
    );
  }
}
