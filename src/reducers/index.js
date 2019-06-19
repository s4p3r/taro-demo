import { combineReducers } from 'redux'
import counter from './counter'
import menu from './menu';
import topiclist from './topic';
import user from './user';

export default combineReducers({
  counter,
  menu,
  topiclist,
  user
})
