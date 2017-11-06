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
