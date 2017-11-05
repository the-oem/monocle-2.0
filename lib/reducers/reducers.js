export const hasErred = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_HAS_ERRED':
      return action.hasErred;

    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
};

export const formattedAddress = (state = null, action) => {
  switch (action.type) {
    case 'STORE_LOCATION':
      return action.formattedAddress;

    default:
      return state;
  }
};

export const latLng = (state = null, action) => {
  switch (action.type) {
    case 'STORE_LAT_LNG':
      return action.latLng;

    default:
      return state;
  }
};

export const queriedJobs = (state = null, action) => {
  switch (action.type) {
    case 'STORE_QUERY':
      return action.queriedJobs;

    default:
      return state;
  }
};
