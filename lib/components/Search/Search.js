import React, { Component } from 'react';
import cityList from '../../utils/cityList';
import Trie from '../../utils/Trie';
import {Redirect} from 'react-router';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      locationInput: '',
      radius: 'Radius',
      suggestions: [],
      searchClicked: false,
    };

    this.trie = new Trie();
    this.trie.populate(cityList);
  }

  handleLocationChange(e) {
    const suggestions = this.trie.suggest(e.target.value);
    this.setState({
      locationInput: e.target.value,
      suggestions,
    });
  }

  handleRadiusChange(e) {
    this.setState({
      radius: e.target.value,
    });
  }

  handleSearch() {
    this.setState({
      searchClicked: true,
    });
  }

  render() {
    const { locationInput, searchClicked, radius } = this.state;
    if (searchClicked) {
      return <Redirect to='/results' />;
    }
    return (
      <div className='location-search'>
        <input
          className='location-input'
          type='text'
          autoFocus
          value={ locationInput }
          onChange={this.handleLocationChange.bind(this)}
          placeholder='Enter city, state or zip code' />
        <select
          name="radius"
          id="radius-selector"
          value={ radius }
          onChange={this.handleRadiusChange.bind(this)}
          >
          <option value="radius">Radius</option>
          <option value="10">10 miles</option>
          <option value="20">20 miles</option>
          <option value="50">50 miles</option>
          <option value="100">100 miles</option>
        </select>
        <button
          className='search-btn'
          disabled={!locationInput || radius === 'Radius'}
          onClick={this.handleSearch.bind(this)}
          >Search</button>
      </div>
    );
  }
}
