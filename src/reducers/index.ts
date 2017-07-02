import {combineReducers} from 'redux';
import {characters} from './characters';
import {characterDetails} from './characterDetails';
import {users} from './users';

const rootReducer = combineReducers({
  characters,
  characterDetails,
  users
});

export default rootReducer;
