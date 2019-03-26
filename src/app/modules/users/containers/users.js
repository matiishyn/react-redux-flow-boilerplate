import { Users } from 'app/modules/users/components/users';
import { getUsers } from 'app/modules/users/thunks';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  getUsers,
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Users);
