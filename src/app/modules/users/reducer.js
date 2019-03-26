import { actions, constants } from 'ducks-helpers';

export const TYPE = constants('users', ['~GET_USERS']);
// users/GET_USERS
// users/GET_USERS_SUCCESS
// users/GET_USERS_ERROR

export const ACTION = actions(TYPE);
// ACTION.getUsers() => { type: 'users/GET_USERS' }
// ACTION.getUsersSuccess() => { type: 'users/GET_USERS_SUCCESS', payload }
// ACTION.getUsersError() => { type: 'users/GET_USERS_ERROR', payload }
