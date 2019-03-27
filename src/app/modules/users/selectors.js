import { createSelector } from 'reselect';

export const selectUsers = state => state.users;

export const selectUsersData = () =>
  createSelector(
    selectUsers,
    // reduxStore => users => data
    users => users.data,
  );

export const selectUsersNumber = () =>
  createSelector(
    selectUsersData(),
    usersData => {
      // calculate number of users
      return usersData.length;
    },
  );
