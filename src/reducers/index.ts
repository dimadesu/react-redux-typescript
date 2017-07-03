import {combineReducers} from 'redux';
import {characters} from './characters';
import {characterDetails} from './characterDetails';
import {users} from './users';
import {comments} from './comments';

const rootReducer = combineReducers({
  characters,
  characterDetails,
  users,
  comments,
});

export default rootReducer;
