import { combineReducers } from 'redux';
import app from 'app/modules/app/reducer';
import photo from 'app/modules/photo/reducer';

export const rootReducer = combineReducers({
  app,
  photo,
});
