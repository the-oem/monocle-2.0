import * as reducer from '../lib/reducers/reducers';

describe('fetch has erred', () => {
  it('should have a default state', () => {
    const defaultState = false;
    expect(reducer.hasErred(undefined, {})).toEqual(defaultState);
  });

  it('should set state to true if fetch erred', () => {
    const hasErredAction = {
      type: 'FETCH_HAS_ERRED',
      hasErred: true,
    };
    expect(reducer.hasErred(undefined, hasErredAction)).toEqual(true);
  });
});

describe('fetch is loading', () => {
  it('should have a default state', () => {
    const defaultState = false;
    expect(reducer.isLoading(undefined, {})).toEqual(defaultState);
  });

  it('should set state to true if fetch is loading', () => {
    const isLoadingAction = {
      type: 'FETCH_IS_LOADING',
      isLoading: true,
    };
    expect(reducer.isLoading(undefined, isLoadingAction)).toEqual(true);
  });
});

describe('store location as formattedAddress', () => {
  it('should have a default state', () => {
    const defaultState = null;
    expect(reducer.formattedAddress(undefined, {})).toEqual(defaultState);
  });

  it('should set state to location string', () => {
    const action = {
      type: 'STORE_LOCATION',
      formattedAddress: 'Denver, CO, USA',
    };
    const expectedResponse = 'Denver, CO, USA';
    expect(reducer.formattedAddress(undefined, action)).toEqual(expectedResponse);
  });
});

describe('store latitude and longitude object', () => {
  it('should have a default state', () => {
    const defaultState = null;
    expect(reducer.latLng(undefined, {})).toEqual(defaultState);
  });

  it('should store lat-long object', () => {
    const action = {
      type: 'STORE_LAT_LNG',
      latLng: {
        latitude: 39.7392358,
        longitude: -104.990251,
      },
    };
    const expectedResponse = {
      latitude: 39.7392358,
      longitude: -104.990251,
    };
    expect(reducer.latLng(undefined, action)).toEqual(expectedResponse);
  });
});

describe('store queried jobs', () => {
  it('should have a default state', () => {
    const defaultState = null;
    expect(reducer.queriedJobs(undefined, {})).toEqual(defaultState);
  });

  it.skip('should store queried jobs object', () => {
    const action = {
      type: 'STORE_QUERY',
      queriedJobs: mockJobs,
    };
    expect(reducer.queriedJobs(undefined, action)).toEqual(mockJobs);
  });
});

describe('store radius', () => {
  it('should have a default state', () => {
    const defaultState = null;
    expect(reducer.radius(undefined, {})).toEqual(defaultState);
  });

  it('should store radius in meters', () => {
    const action = {
      type: 'STORE_RADIUS',
      radius: 16093.4,
    };
    const expectedResponse = 16093.4;
    expect(reducer.radius(undefined, action)).toEqual(expectedResponse);
  });
});
