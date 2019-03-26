import { actions, constants } from 'ducks-helpers';
import { handleActions } from 'redux-actions';

export const TYPE = constants('users', ['~GET_USERS']);
// users/GET_USERS
// users/GET_USERS_SUCCESS
// users/GET_USERS_ERROR

export const ACTION = actions(TYPE);
// ACTION.getUsers() => { type: 'users/GET_USERS' }
// ACTION.getUsersSuccess() => { type: 'users/GET_USERS_SUCCESS', payload }
// ACTION.getUsersError() => { type: 'users/GET_USERS_ERROR', payload }

export const initialState = {
  isLoading: false,
  serverError: null,

  data: [],
};

export default handleActions(
  {
    [TYPE.GET_USERS]: setLoading,
    [TYPE.GET_USERS_SUCCESS]: getUsersSuccess,
    [TYPE.GET_USERS_ERROR]: setServerError,
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

function getUsersSuccess(state, action) {
  return {
    ...state,
    isLoading: false,
    data: action.payload,
  };
}
