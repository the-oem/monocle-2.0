import React, { Component } from 'react';
import Home from '../Home/Home';
import { Route } from 'react-router';
import JobList from '../JobList/JobList';
import Job from '../Job/Job';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/results' component={JobList} />
        <Route path='/results/:id' render={ ({ match }) => <Job job={ mockJobs.find(job => match.params.id === job.id) } /> } />
      </div>
    );
  }
}
