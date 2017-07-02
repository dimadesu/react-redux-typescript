import {Action, Dispatch, bindActionCreators} from 'redux';
import {
  LOADING_CHARACTERS_SUCCEEDED,
  LOADING_ALL_CHARACTERS_SUCCEEDED
} from '../constants/characters';
import {CharacterState} from '../types/index';

export const loadingCharactersSucceeded = (characters: CharacterState[]) => ({
  type: LOADING_CHARACTERS_SUCCEEDED,
  characters
});

const BASE_URL = 'https://swapi.co/api/people';

export const loadCharactersPage = (page: number) => (dispatch: Dispatch<Action>) => {
  return fetch(`${BASE_URL}?page=${page}`)
  .then((response) => response.json())
  .then((json) => {
    const characters = json.results.map((character: any) => {
      return {
        name: character.name,
        gender: character.gender
      };
    });

    dispatch(
      loadingCharactersSucceeded(characters)
    );

    return characters;
  });
};

export const loadAllCharacters = () => (dispatch: Dispatch<Action>) => {
  return Promise.all(
    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((page) => {
      return bindActionCreators(loadCharactersPage, dispatch)(page);
    })
  ).then(() => dispatch({
    type: LOADING_ALL_CHARACTERS_SUCCEEDED
  }));
};

export const searchCharacters = (term: string) => (dispatch: Dispatch<Action>) => {
  fetch(`${BASE_URL}?page=1&search=${term}`)
  .then((response) => response.json())
  .then((json) => {
    const characters = json.results.map((character: any) => {
      return {
        name: character.name,
        gender: character.gender
      };
    });

    dispatch(
      loadingCharactersSucceeded(characters)
    );
  });
};
