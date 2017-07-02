import {combineReducers} from 'redux';
import {characters} from './characters';
import {characterDetails} from './characterDetails';

const rootReducer = combineReducers({
  characters,
  characterDetails
});

export default rootReducer;
