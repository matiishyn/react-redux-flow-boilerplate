import { combineReducers } from 'redux';
import app from 'app/modules/app/reducer';
import photos from 'app/modules/photos/reducer';

export const rootReducer = combineReducers({
  app,
  photos,
});
