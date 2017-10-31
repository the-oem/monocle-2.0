import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import mockJobs from '../../utils/mockJobData.json';
import './Job.scss';


export default class Job extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { title, company, description, location, salary } = this.props.job;
    return (
      <div>
        <Nav accountStatus={'LOG OUT'} />
        <main className='full-job-main'>
          <aside className='full-job-aside'>
            <div className='full-job-info'>
              <p className='full-job-title'>{title}</p>
              <p className='full-job-company'>{company}</p>
              <p className='full-job-salary'>{salary}</p>
              <div className='full-company-location'>
                <img className='full-location-icon' src='lib/assets/location-pin.svg' alt='location icon' />
                <p className='full-job-location'>{location}</p>
              </div>
              <a className='apply-now-link' href='#' target='_blank'>APPLY NOW</a>
            </div>
            <hr />
            <div className='aside-icon-container'>
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
              <div className='recommendation-container'>
                <img src='lib/assets/heart.svg' alt='heart icon' />
                <img src='lib/assets/shit.svg' alt='shit icon' />
              </div>
            </div>
          </aside>
          <section className='full-job-section'>
            <h2 className='full-job-description-header'>DESCRIPTION</h2>
            <p className='full-job-description'>{description}</p>
          </section>
        </main>
      </div>
    );
  }
}
