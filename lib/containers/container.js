import { connect } from 'react-redux';
import { fetchLatLng, fetchJobData, storeRadius } from '../actions';

const mapStateToProps = store => {
  return {
    fetchIsLoading: store.isLoading,
    fetchHasErred: store.hasErred,
    formattedAddress: store.formattedAddress,
    latLng: store.latLng,
    queriedJobs: store.queriedJobs,
    radius: store.radius,
    recentSearches: store.recentSearches,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLatLng: (location) => dispatch(fetchLatLng(location)),
    fetchJobData: (latLng, radius) => dispatch(fetchJobData(latLng, radius)),
    storeRadius: (radius) => dispatch(storeRadius(radius)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
