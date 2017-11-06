import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { hasErred, isLoading, formattedAddress, latLng, queriedJobs, radius, recentSearches, user } from './reducers';

const rootReducer = combineReducers({
  hasErred,
  isLoading,
  formattedAddress,
  latLng,
  queriedJobs,
  radius,
  recentSearches,
  user,
  routing: routerReducer,
});

export default rootReducer;
