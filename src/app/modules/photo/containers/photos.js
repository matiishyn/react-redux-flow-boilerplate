import { Photos } from 'app/modules/photo/components/photos';
import { selectPhotosData } from 'app/modules/photo/selectors';
import { getPhotos } from 'app/modules/photo/thunks';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
  photosData: selectPhotosData(),
});

const mapDispatchToProps = {
  getPhotos,
};

export default compose(
  withRouter, // must go before connect
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Photos);
