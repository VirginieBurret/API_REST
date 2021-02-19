import { combineReducers } from 'redux';
import user from '../reducers/user';

const combinedReducer = combineReducers({
  user,
});

export default combinedReducer;
