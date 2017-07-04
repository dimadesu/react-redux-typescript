import {CharacterState} from '../types/index';
import {
  SEARCH_CHARACTERS,
} from '../constants/characters';

interface CustomAction {
  type: string;
  term: string;
}

export function sortedAndFilteredCharacters(state: CharacterState[], action: CustomAction): CharacterState[] {
  switch (action.type) {
    case SEARCH_CHARACTERS:
      return state.filter((character) => {
        return character && character.name && character.name.toLowerCase().indexOf(
          action.term.trim().toLowerCase()
        ) !== -1;
      });
    default:
      return state ? state.slice().sort(function(a: CharacterState, b: CharacterState) {
        if (a.rating !== b.rating) {
          return b.rating - a.rating;
        } else {
          // Sort alphabetically when same level
          return a.name < b.name ? -1 : 1;
        }
      }) : [];
  }
}
