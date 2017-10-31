import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import mockJobs from '../../utils/mockJobData.json';

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
          <aside>
            <div className='full-job-info'>
              <p className='full-job-title'>{title}</p>
              <p className='full-job-company'>{company}</p>
              <p className='full-job-salary'>{salary}</p>
              <div className='full-company-location'>
                <img className='full-location-icon' src='lib/assets/placeholder (2).svg' alt='location icon' />
                <p className='full-job-location'>{location}</p>
              </div>
              <a className='apply-now-link' href='#' target='_blank'>APPLY NOW</a>
            </div>
          </aside>
          <section>
            <h2 className='full-job-description-header'>DESCRIPTION</h2>
            <p className='full-job-description'>{description}</p>
          </section>
        </main>
      </div>
    );
  }
}
