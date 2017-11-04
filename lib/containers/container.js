import { connect } from 'react-redux';
import { fetchLatLng } from '../actions';

const mapStateToProps = store => {
  return {
    fetchIsLoading: store.isLoading,
    fetchHasErred: store.hasErred,
    formattedAddress: store.formattedAddress,
    latLng: store.latLng,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLatLng: (location) => dispatch(fetchLatLng(location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
