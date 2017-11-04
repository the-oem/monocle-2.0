import React, { Component } from 'react';
import container from '../../containers/container';
import cityList from '../../utils/cityList';
import Trie from '../../utils/Trie';
import { Redirect } from 'react-router';
import './Search.scss';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      locationInput: '',
      radius: 'Radius',
      suggestions: [],
      searchClicked: false,
    };

    this.handleLocationSuggestions = this.handleLocationSuggestions.bind(this);

    this.trie = new Trie();
    this.trie.populate(cityList);
  }

  handleLocationSuggestions(e) {
    const suggestions = this.trie.suggest(e.target.value);
    this.setState({ suggestions });
  }

  handleRadiusChange(e) {
    this.setState({
      radius: e.target.value,
    });
  }

  handleSearch() {
    // this.setState({
    //   searchClicked: true,
    // });
    this.props.fetchLatLng(this.state.locationInput);
  }

  selectLocation(e) {
    this.setState({
      locationInput: e.target.innerText,
      suggestions: [],
    });
  }

  render() {
    const { locationInput, searchClicked, radius, suggestions } = this.state;
    const shortArray = suggestions.slice(0, 5);

    if (searchClicked) {
      return <Redirect to='/results' />;
    }


    return (
      <div className='location-search' style={this.props.locationSearchStyle}>
        <div className='location-container'>
          <input
            className='location-input'
            type='text'
            autoFocus
            value={ locationInput }
            onChange={(e) => {
              this.setState({ locationInput: e.target.value });
              if (e.target.value !== '') {
                this.handleLocationSuggestions(e);
              } else {
                this.setState({ suggestions: [] });
              }
            }}
            placeholder='Enter city, state or zip code' />
          <div className="suggestion-container">
            <ul className="suggestions-list">
              {shortArray.map((city, index) => <li key={index} onClick={this.selectLocation.bind(this)}>{city}</li>)}
            </ul>
          </div>
        </div>
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
          style={this.props.searchBtnStyle}
          className='search-btn'
          disabled={!locationInput || radius === 'Radius'}
          onClick={this.handleSearch.bind(this)}
          >Search</button>
      </div>
    );
  }
}

export default container(Search);
