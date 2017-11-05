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

export const storeQuery = (queriedJobs) => {
  return {
    type: 'STORE_QUERY',
    queriedJobs,
  };
};

export const fetchAllJobs = (() => {
  const jobPromises = [];
  for (let i = 1; i < 121; i++) {
    fetch(`https://lookingfor-temp.herokuapp.com/api/v1/jobs?page=${i}`)
      .then(response => jobPromises.push(response.json()))
  }
  return () => {
    return Promise.all(jobPromises)
  };
})();

export const filterJobData = (data, latLng, radius) => {
  const meterRadius = parseInt(radius) * 1609.34;
  const filteredData = data.map(page => {
    return page.jobs.filter(job => {
      const jobLatLng = Object.assign({}, { latitude: parseFloat(job.location.split(',')[0]) }, { longitude: parseFloat(job.location.split(' ')[1]) });
      if (isPointInCircle(jobLatLng, latLng, meterRadius)) {
        return job;
      };
    });
  }).filter(array => array.length).reduce((acc, elem) => acc.concat(elem), []);

  dispatch(storeQuery(filteredData));
};

export const fetchJobData = (latLng, radius) => {
  return dispatch => {
    dispatch(fetchIsLoading(true));
    fetchAllJobs()
      .then(data => filterJobData(data, latLng, radius))
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
