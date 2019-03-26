import { combineReducers } from 'redux';
import app from 'app/modules/app/reducer';
import photos from 'app/modules/photos/reducer';
import users from 'app/modules/users/reducer';

export const rootReducer = combineReducers({
  app,
  photos,
  users,
});
