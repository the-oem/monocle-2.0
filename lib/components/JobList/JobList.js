import React, { Component } from 'react';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import Nav from '../Nav/Nav';
import './JobList.scss';
import mockJobs from '../../utils/mockJobData.json';

export default class JobList extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleJobListDisplay = this.handleJobListDisplay.bind(this);
  }

  handleJobListDisplay() {
    return mockJobs.map((job, index) =>
      <li className='job' key={index}>
        <div className='job-info'>
          <p className='job-title'>{job.title}</p>
          <p className='job-company'>{job.company}</p>
          <p className='job-location'>{job.location}</p>
        </div>
        <div className='job-links'>
          <p>Share</p>
          <p>Save</p>
          <Link to='/results/:id'>View Full Listing</Link>
        </div>
      </li>);
  }

  render() {
    return (
      <div>
        <Nav accountStatus={'LOG OUT'} />
        <Search />
        <div className='main-content'>
          <Filter />
          <ul className='job-list'>
            { this.handleJobListDisplay() }
          </ul>
        </div>
      </div>
    );
  }
}
