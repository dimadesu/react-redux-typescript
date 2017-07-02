import {combineReducers} from 'redux';
import {characters} from './characters';
import {enthusiasm} from './enthusiasm';

const rootReducer = combineReducers({
  characters,
  enthusiasm
});

export default rootReducer;
