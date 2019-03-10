import { actions, constants } from 'ducks-helpers';
import { handleActions } from 'redux-actions';

export const TYPE = constants('app', ['~GET_PROFILE']);
export const ACTION = actions(TYPE);

export const initialState = {
  isLoading: false,
  serverError: null,

  profileData: {},
};

export default handleActions(
  {
    [TYPE.GET_PROFILE]: setLoading,
    [TYPE.GET_PROFILE_SUCCESS]: getProfileSuccess,
    [TYPE.GET_PROFILE_ERROR]: setServerError,
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

function getProfileSuccess(state, action) {
  return {
    ...state,
    isLoading: false,
    profileData: action.payload,
  };
}
