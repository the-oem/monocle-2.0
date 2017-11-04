import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { hasErred, isLoading } from './reducers';

const rootReducer = combineReducers({
  hasErred,
  isLoading,
  routing: routerReducer,
});

export default rootReducer;
