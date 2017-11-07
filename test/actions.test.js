import * as action from '../lib/actions';
import mockJobs from '../test-helpers/mockJobsData';

describe('fetchHasErred', () => {
  it('fetchHasErred should return a boolean', () => {
    const fetchHasErredTrue = {
      type: 'FETCH_HAS_ERRED',
      hasErred: true,
    };
    expect(action.fetchHasErred(true)).toEqual(fetchHasErredTrue);

    const fetchHasErredFalse = {
      type: 'FETCH_HAS_ERRED',
      hasErred: false,
    };

    expect(action.fetchHasErred(false)).toEqual(fetchHasErredFalse);
  });
});

describe('fetchIsLoading', () => {
  it('fetchIsLoading should return a boolean', () => {
    const fetchIsLoadingTrue = {
      type: 'FETCH_IS_LOADING',
      isLoading: true,
    };
    expect(action.fetchIsLoading(true)).toEqual(fetchIsLoadingTrue);

    const fetchIsLoadingFalse = {
      type: 'FETCH_IS_LOADING',
      isLoading: false,
    };
    expect(action.fetchIsLoading(false)).toEqual(fetchIsLoadingFalse);
  });
});

describe('storeLocation', () => {
  it('should return the current location', () => {
    const location = 'Denver, CO, USA';
    const expectedAction = {
      type: 'STORE_LOCATION',
      formattedAddress: location,
    };
    expect(action.storeLocation(location)).toEqual(expectedAction);
  });
});

describe('storeLatLng', () => {
  it('should return the current latitude and longitude', () => {
    const latLngObj = {
      latitude: 39.7392358,
      longitude: -104.990251,
    };
    const expectedAction = {
      type: 'STORE_LAT_LNG',
      latLng: latLngObj,
    };
    expect(action.storeLatLng(latLngObj)).toEqual(expectedAction);
  });
});

describe('storeQuery', () => {
  it('should return the filteredJobs array', () => {
    const expectedAction = {
      type: 'STORE_QUERY',
      queriedJobs: mockJobs,
    };
    expect(action.storeQuery(mockJobs)).toEqual(expectedAction);
  });
});

describe('storeRadius', () => {
  it('should return the radius object', () => {
    const radius = '10';
    const expectedAction = {
      type: 'STORE_RADIUS',
      radius: 16093.4,
    };
    expect(action.storeRadius(radius)).toEqual(expectedAction);
  });
});

describe('storeRecentSearch', () => {
  it('should return the recent search object', () => {
    const location = 'Denver, CO, USA';
    const expectedAction = {
      type: 'STORE_RECENT_SEARCH',
      recentSearch: location
    };
    expect(action.storeRecentSearch(location)).toEqual(expectedAction);
  });
});

describe('storeUser', () => {
  it('should return a new user object', () => {
    const mockUser = {
      id: '6',
      name: 'Bo',
      email: 'bo@bo.com',
    };
    const user = {
      type: 'STORE_USER',
      user: mockUser,
    };
    expect(action.storeUser(mockUser)).toEqual(user);
  });
});

describe('removeUser', () => {
  it('should remove the user', () => {
    const removedUser = {
      type: 'REMOVE_USER',
      user: null,
    };
    expect(action.removeUser()).toEqual(removedUser);
  });
});
