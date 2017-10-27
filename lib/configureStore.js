import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { routerMiddleware } from 'react-router-redux';
const configureStore = (initialState, initialHistory) => {
  const middleware = routerMiddleware(initialHistory);
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, middleware)
    );
};
export default configureStore;
