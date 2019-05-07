import {combineReducers} from 'redux';
import lastestReducer from './lastestReducer';

export default combineReducers({
  lastest_items:lastestReducer
});