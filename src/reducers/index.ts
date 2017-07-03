import {characters} from './characters';
import {characterDetails} from './characterDetails';
import {users} from './users';
import {comments} from './comments';
import {StoreState} from '../types/index';

function rootReducer(
  state: StoreState,
  action: any
) {
  return {
    characters: characters(state.characters, action),
    characterDetails: characterDetails(state.characterDetails, action),
    users: users(state.users, action),
    comments: comments(state, action),
  };
}

export default rootReducer;
