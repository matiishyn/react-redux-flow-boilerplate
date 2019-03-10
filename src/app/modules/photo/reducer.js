import { actions, constants } from 'ducks-helpers';
import { handleActions } from 'redux-actions';

export const TYPE = constants('photo', ['~GET_PHOTOS']);
export const ACTION = actions(TYPE);

export const initialState = {
  isLoading: false,
  serverError: null,

  photosData: [],
};

export default handleActions(
  {
    [TYPE.GET_PHOTOS]: setLoading,
    [TYPE.GET_PHOTOS_SUCCESS]: getPhotosSuccess,
    [TYPE.GET_PHOTOS_ERROR]: setServerError,
  },
  initialState,
);

function setLoading(state) {
  return { ...state, isLoading: true };
}

function setServerError(state, action) {
  return {
    ...state,
    isLoading: false,
    serverError: action.payload,
  };
}

function getPhotosSuccess(state, action) {
  return {
    ...state,
    isLoading: false,
    photosData: action.payload,
  };
}
