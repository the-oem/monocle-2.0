import React, { Component } from 'react';
import container from '../../containers/container';
import { Link } from 'react-router-dom';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import Nav from '../Nav/Nav';
import Job from '../Job/Job';
import './JobList.scss';
import mockJobs from '../../utils/mockJobData.json';

class JobList extends Component {
  constructor() {
    super();
    this.state = { queriedJobs: [] };
    this.handleJobListDisplay = this.handleJobListDisplay.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.latLng !== this.props.latLng) {
      this.props.fetchJobData(nextProps.latLng, nextProps.radius);
    }

    if (nextProps.queriedJobs !== this.props.queriedJobs) {
      this.setState({ queriedJobs: nextProps.queriedJobs })
    }
  }

  handleJobListDisplay() {
    return this.state.queriedJobs.map((job, index) =>
      <li className='job' key={index}>
        <div className='job-info'>
          <p className='job-title'>{job.title}</p>
          <p className='job-company'>{job.company.name}</p>
          <div className='company-location'>
            <img className='location-icon' src='lib/assets/location-pin.svg' alt='location icon' />
            <p className='job-location'>{this.props.formattedAddress}</p>
          </div>
        </div>
        <div className='job-links'>
          <div className='share-save'>
            <div className='share-container'>
              <img src="lib/assets/share-option.svg" alt="Share job listing"/>
              <p>SHARE</p>
            </div>
            <div className='save-container'>
              <img src="lib/assets/push-pin.svg" alt="Save job listing"/>
              <p>SAVE</p>
            </div>
          </div>
          <Link
            className='full-job-link'
            to={`/results/${job.id}`}><img src="lib/assets/keyboard-right-arrow-button.svg" alt="Arrow right"/>
            VIEW FULL LISTING
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
        <Nav />
        <Search
          locationSearchStyle={locationSearchStyle}
          searchBtnStyle={searchBtnStyle}
        />
        <div className='main-content'>
          <Filter />
          <ul className='job-list'>
            { this.state.queriedJobs.length ? this.handleJobListDisplay() : null }
          </ul>
        </div>
      </div>
    );
  }
}

export default container(JobList);
