import { getProfileApi } from './api';
import { ACTION } from './reducer';

export const getProfile = () => (dispatch, getState) => {
  dispatch(ACTION.getProfile());
  return getProfileApi()
    .then(result => dispatch(ACTION.getProfileSuccess(result.data)))
    .catch(error => dispatch(ACTION.getProfileError(error)));
};
