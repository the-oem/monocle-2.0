import React, { Component } from 'react';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import mockJobs from '../../utils/mockJobData.json';

export default class JobList extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleJobListDisplay = this.handleJobListDisplay.bind(this);
  }

  handleJobListDisplay() {
    console.log(mockJobs);
  }

  render() {
    return (
      <div>
        <Filter />
        <Search />
        <ul>
          { this.handleJobListDisplay() }
        </ul>
      </div>
    );
  }
}
