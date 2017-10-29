import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <div className='share-save'>
            <div className='share-container'>
              <img src="lib/assets/share-option.svg" alt="Share job listing"/>
              <p>Share</p>
            </div>
            <div className='save-container'>
              <img src="lib/assets/push-pin.svg" alt="Save job listing"/>
              <p>Save</p>
            </div>
          </div>
          <Link
            className='full-job-link'
            to={`/results/${job.id}`}><img src="lib/assets/keyboard-right-arrow-button.svg" alt="Arrow right"/>
            View Full Listing
          </Link>
        </div>
      </li>);
  }

  render() {
    const locationSearchStyle = {
      background: '#00bbd2',
      padding: 10,
    };

    const searchBtnStyle = {
      background: '#4d4d4f',
    };

    return (
      <div>
        <Nav accountStatus={'LOG OUT'} />
        <Search
          locationSearchStyle={locationSearchStyle}
          searchBtnStyle={searchBtnStyle}
        />
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
