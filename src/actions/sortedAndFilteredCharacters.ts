import {
  SEARCH_CHARACTERS,
  SORT_CHARACTERS_BY_RATING,
} from '../constants/sortedAndFilteredCharacter';

export const searchCharacters = (term: string) => {
  return {
    type: SEARCH_CHARACTERS,
    term
  };
};

export const sortCharactersByRating = () => {
  return {
    type: SORT_CHARACTERS_BY_RATING
  };
};
