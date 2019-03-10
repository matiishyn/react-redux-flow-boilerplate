import { App } from 'app/modules/app/components/app';
import { selectAppProfileData } from 'app/modules/app/selectors';
import { getProfile } from 'app/modules/app/thunks';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
  profileData: selectAppProfileData(),
});

const mapDispatchToProps = {
  getProfile,
};

export default compose(
  withRouter, // must go before connect
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(App);
