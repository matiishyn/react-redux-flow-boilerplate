import { getUsersApi } from './api';
import { ACTION } from './reducer';

export const getUsers = () => dispatch => {
  dispatch(ACTION.getUsers());
  return getUsersApi()
    .then(result => dispatch(ACTION.getUsersSuccess(result.data)))
    .catch(error => dispatch(ACTION.getUsersError(error)));
};
