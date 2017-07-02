import {CharacterState} from '../types/index';
import {
  LOADING_CHARACTERS_SUCCEEDED,
  LOADING_ALL_CHARACTERS_SUCCEEDED
} from '../constants/characters';

interface CustomAction {
  type: string;
  characters: CharacterState[];
}

export function characters(state: CharacterState[], action: CustomAction): CharacterState[] {
  switch (action.type) {
    case LOADING_CHARACTERS_SUCCEEDED:
      return state.concat(action.characters);
    case LOADING_ALL_CHARACTERS_SUCCEEDED:
      // TODO: sort
      return state.concat(action.characters);
    default:
      return state ? state : [];
  }
}
