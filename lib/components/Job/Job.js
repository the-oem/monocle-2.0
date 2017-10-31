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
    return (
      <div>
        <Nav accountStatus={'LOG OUT'} />
        <main>
          <aside>

          </aside>
          <section>

          </section>
        </main>
      </div>
    );
  }
}
