import { Users } from 'app/modules/users/components/users';
import {
  selectUsersData,
  selectUsersNumber,
} from 'app/modules/users/selectors';
import { getUsers } from 'app/modules/users/thunks';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = () =>
  createStructuredSelector({
    usersData: selectUsersData(),
    usersNumber: selectUsersNumber(),
  });

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
