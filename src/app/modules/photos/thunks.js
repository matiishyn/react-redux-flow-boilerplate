import { getPhotosApi } from './api';
import { ACTION } from './reducer';

export const getPhotos = () => (dispatch, getState) => {
  dispatch(ACTION.getPhotos());
  return getPhotosApi()
    .then(result => dispatch(ACTION.getPhotosSuccess(result.data)))
    .catch(error => dispatch(ACTION.getPhotosError(error)));
};
