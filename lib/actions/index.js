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

export const storeRadius = (radius) => {
  return {
    type: 'STORE_RADIUS',
    radius: parseInt(radius) * 1609.34,
  };
};

export const storeRecentSearch = (location) => {
  return {
    type: 'STORE_RECENT_SEARCH',
    recentSearch: location,
  };
};

export const storeUser = (userObj) => {
  return {
    type: 'STORE_USER',
    user: userObj,
  };
};

export const filterJobData = (data, latLng, radius) => {
  return data.map(page => {
    return page.jobs.filter(job => {
      const jobLatLng = Object.assign({},
        { latitude: parseFloat(job.location.split(',')[0]) },
        { longitude: parseFloat(job.location.split(' ')[1]) });
      return isPointInCircle(jobLatLng, latLng, radius);
    });
  }).filter(array => array.length).reduce((acc, elem) => acc.concat(elem), []);
};

export const fetchAllJobs = () => {
  const jobPromises = [];
  for (let i = 1; i < 7; i++) {
    jobPromises.push(fetch(`https://lookingfor-temp.herokuapp.com/api/v1/jobs?results_per_page=500&page=${i}`).then(results => results.json()));
  }
  return Promise.all(jobPromises);
};

export const fetchJobData = (latLng, radius) => {
  return dispatch => {
    dispatch(fetchIsLoading(true));
    fetchAllJobs()
      .then(data => {
        const filteredData = filterJobData(data, latLng, radius);
        if (filteredData.length) {
          dispatch(fetchIsLoading(false));
          dispatch(storeQuery(filteredData));
        }
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
        dispatch(storeRecentSearch(parsedResults.results[0].formatted_address));
      })
      .catch(error => console.log({ error }));
  };
};

export const handleUserStorage = (name, email) => {
  return dispatch => {
    dispatch(fetchIsLoading(true));
    return fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({ name, email }),
      headers: { 'Content-Type': 'application/json' },
    }).then(results => results.json())
      .then(parsedResults => dispatch(storeUser(parsedResults[0])))
      .catch(error => console.log({ error }));
  };
};
