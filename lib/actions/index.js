import key from '../utils/key';
import { isPointInCircle } from 'geolib';

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

export const storeLocation = (location) => {
  return {
    type: 'STORE_LOCATION',
    formattedAddress: location,
  };
};

export const storeLatLng = (latLngObj) => {
  return {
    type: 'STORE_LAT_LNG',
    latLng: latLngObj,
  };
};

export const fetchJobData = (latLng, radius) => {
  return dispatch => {
    dispatch(fetchIsLoading(true));

    fetch('https://lookingfor-temp.herokuapp.com/api/v1/jobs')
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

      const meterRadius = parseInt(radius) * 1609.34;
      console.log({ parsedResults });
      console.log( 'meter radius', meterRadius);

      const filteredJobs = parsedResults.jobs.filter( job => {
        const jobLatLng = Object.assign({}, { latitude: job.location.split(',')[0] }, { longitude: job.location.split(' ')[1] })
        if (isPointInCircle(jobLatLng, latLng, meterRadius)) {
          return job
        }
      })
      console.log({ filteredJobs });
    })
    .catch(error => console.log({ error }));
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
      dispatch(storeLocation(parsedResults.results[0].formatted_address));

      const latLngObj = Object.assign({},
        {
          latitude: parsedResults.results[0].geometry.location.lat, longitude: parsedResults.results[0].geometry.location.lng
        });

      dispatch(storeLatLng(latLngObj));
    })
    .catch(error => console.log({ error }));
  };
};
