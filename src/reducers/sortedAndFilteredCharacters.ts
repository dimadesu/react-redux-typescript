import {StoreState, CharacterState} from '../types/index';
import {
  SEARCH_CHARACTERS,
  SORT_CHARACTERS_BY_RATING,
} from '../constants/sortedAndFilteredCharacter';

interface CustomAction {
  type: string;
  term: string;
}

function sort (characters: CharacterState[]) {
  return characters.sort(function(a: CharacterState, b: CharacterState) {
    if (a.rating !== b.rating) {
      return b.rating - a.rating;
    } else {
      // Sort alphabetically when same level
      return a.name < b.name ? -1 : 1;
    }
  });
}

export function sortedAndFilteredCharacters(state: StoreState, action: CustomAction): CharacterState[] {
  switch (action.type) {
    case SEARCH_CHARACTERS:
      const filteredCharacters = state.characters.filter((character) => {
        return character && character.name && character.name.toLowerCase().indexOf(
          action.term.trim().toLowerCase()
        ) !== -1;
      });

      return sort(filteredCharacters);
    case SORT_CHARACTERS_BY_RATING:
      return sort(state.characters);
    default:
      let nextState = state.sortedAndFilteredCharacters;

      // TODO: this a bit hacky way to know when all charcters loaded
      if (
        state.sortedAndFilteredCharacters && state.sortedAndFilteredCharacters.length === 0 &&
        state.characters.length > 80
      ) {
        nextState = sort(state.characters);
      }

      if (!state.sortedAndFilteredCharacters) {
        nextState = [];
      }

      return nextState;
  }
}
