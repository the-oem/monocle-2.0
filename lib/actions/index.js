import key from '../utils/key';

export const fetchHasErred = (bool) => {
  return {
    type: 'FETCH_HAS_ERRED',
    hasErred: bool,
  };
};

export const fetchIsLoading = (bool) => {
  return {
    type: 'FETCH_IS_LOADING',
    isLoading: bool,
  };
};


export const fetchLatLng = (location) => {
  return dispatch => {
    dispatch(fetchIsLoading(true));

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`)
    .then(response => {
      if (response.status !== 200) {
        dispatch(fetchHasErred(true));
      } else {
        dispatch(fetchIsLoading(false));
        return response;
      }
    })
    .then(results => results.json())
    .then(parsedResults => {
      const locationObj = Object.assign({}, {formattedAddress: parsedResults.results[0].formatted_address, latLng: parsedResults.results[0].geometry.location})
      console.log(locationObj)
    })
  };
};
