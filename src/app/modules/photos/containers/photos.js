import { Photos } from 'app/modules/photos/components/photos';
import { selectPhotosData } from 'app/modules/photos/selectors';
import { getPhotos } from 'app/modules/photos/thunks';
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
