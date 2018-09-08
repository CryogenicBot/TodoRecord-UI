import { combineReducers } from 'redux';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
  userId: userReducer
});

export default rootReducer;
