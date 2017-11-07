import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as action from '../lib/actions';
import key from '../lib/utils/key';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchLatLng async', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('translates searched location into latitude, longitude object', () => {
    const location = 'Denver, CO, USA';
    const mockLatLng = {};

    fetchMock(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`, {
      status: 200,
      body: mockLatLng,
    });

    expect(fetchMock.routes[0].method).toEqual('GET');
    expect(fetchMock._matchedCalls.length).toEqual(0);
    expect(fetchMock.routes[0].response.body).toEqual(mockLatLng);

    const store = mockStore();
    store.dispatch(action.storeLatLng());

    expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.called(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`)).toEqual(true);
    expect(fetchMock.routes[0].response.body).toEqual(mockLatLng);
  });
});
