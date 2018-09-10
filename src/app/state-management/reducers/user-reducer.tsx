import { AnyAction } from 'redux';
import Actions from '../actions';

export default function userReducer(state: number = 0, action: AnyAction) {
  switch (action.type) {
    case Actions.LOGIN_USER:
      return action.userId;
    default:
      return state;
  }
}