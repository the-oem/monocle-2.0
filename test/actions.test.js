import * as action from '../lib/actions';

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
  it('should return the assessment object', () => {
    const assessmentObj = {
      id: 'c2992ef2-c4b1-4594-a3b5-bf219957c3d8',
      deck_id: 'introver-extrovert'
    }
    const expectedAction = {
      type: 'FETCH_ASSESSMENT_SUCCESS',
      fetchedAssessment: assessmentObj
    }
    expect(action.fetchAssessmentSuccess(assessmentObj)).toEqual(expectedAction)
  })
})
