import { connect } from 'react-redux';
import { fetchLatLng, fetchJobData, storeRadius, handleUserStorage, removeUser } from '../actions';

const mapStateToProps = store => {
  return {
    fetchIsLoading: store.isLoading,
    fetchHasErred: store.hasErred,
    formattedAddress: store.formattedAddress,
    latLng: store.latLng,
    queriedJobs: store.queriedJobs,
    radius: store.radius,
    recentSearches: store.recentSearches,
    user: store.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLatLng: (location) => dispatch(fetchLatLng(location)),
    fetchJobData: (latLng, radius) => dispatch(fetchJobData(latLng, radius)),
    storeRadius: (radius) => dispatch(storeRadius(radius)),
    handleUserStorage: (name, email) => dispatch(handleUserStorage(name, email)),
    removeUser: () => dispatch(removeUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
