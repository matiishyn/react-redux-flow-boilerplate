import { createSelector } from 'reselect';

export const selectPhotos = state => state.photos;

export const selectPhotosData = () =>
  createSelector(
    selectPhotos,
    state => state.photosData,
  );
