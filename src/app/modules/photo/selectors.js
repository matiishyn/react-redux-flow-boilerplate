import { createSelector } from 'reselect';

export const selectPhoto = state => state.photo;

export const selectPhotosData = () =>
  createSelector(
    selectPhoto,
    state => state.photosData,
  );
