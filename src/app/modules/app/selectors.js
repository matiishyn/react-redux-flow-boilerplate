import { createSelector } from 'reselect';

export const selectApp = state => state.app;

export const selectAppProfileData = () =>
  createSelector(
    selectApp,
    state => state.profileData,
  );
