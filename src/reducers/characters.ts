import {CharacterState} from '../types/index';
import {
  LOADING_CHARACTERS_SUCCEEDED,
  LOADING_ALL_CHARACTERS_SUCCEEDED,
  SEARCH_CHARACTERS,
  SORT_CHARACTERS_BY_RATING,
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
      return state.concat(action.characters);
    case SEARCH_CHARACTERS:
      return state.filter((character) => {
        return character && character.name && character.name.indexOf(action.term) !== -1;
      });
    case SORT_CHARACTERS_BY_RATING:
      // TODO: we could sort alphabetically when rating is the same
      return state.sort(function(a: CharacterState, b: CharacterState) {
        return b.rating - a.rating;
      });
    default:
      return state ? state : [];
  }
}
