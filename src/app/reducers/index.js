import { combineReducers } from 'redux';

// example
const red1 = (state = { friends: [] }, action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      return [{ friends: action.payload.friend }, ...state.friends];
    default:
      return state;
  }
  return state;
};

export const rootReducer = combineReducers({
  red1,
});
