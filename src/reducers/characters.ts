import {CharacterState} from '../types/index';
import {
  LOADING_CHARACTERS_SUCCEEDED,
  LOADING_ALL_CHARACTERS_SUCCEEDED,
  SEARCH_CHARACTERS
} from '../constants/characters';

interface CustomAction {
  type: string;
  characters: CharacterState[];
  term: string;
}

export function characters(state: CharacterState[], action: CustomAction): CharacterState[] {
  switch (action.type) {
    case LOADING_CHARACTERS_SUCCEEDED:
      return state.concat(action.characters);
    case LOADING_ALL_CHARACTERS_SUCCEEDED:
      // TODO: sort
      return state.concat(action.characters);
    case SEARCH_CHARACTERS:
      // TODO: sort
      return state.filter((character) => {
        return character && character.name && character.name.indexOf(action.term) !== -1;
      });
    default:
      return state ? state : [];
  }
}
