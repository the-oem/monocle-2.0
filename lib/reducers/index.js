import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { hasErred, isLoading, formattedAddress, latLng } from './reducers';

const rootReducer = combineReducers({
  hasErred,
  isLoading,
  formattedAddress,
  latLng,
  routing: routerReducer,
});

export default rootReducer;
