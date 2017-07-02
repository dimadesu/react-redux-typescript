import {Action} from 'redux';
import {Dispatch} from 'redux';
import {LOADING_CHARACTERS_SUCCEEDED} from '../constants/characters';
import {CharacterState} from '../types/index';

export const loadingCharactersSucceeded = (characters: CharacterState[]) => ({
  type: LOADING_CHARACTERS_SUCCEEDED,
  characters
});

const BASE_URL = 'https://swapi.co/api/people/?format=json';

export const loadCharacters = () => (dispatch: Dispatch<Action>) => {
  fetch(
    `${BASE_URL}&page=1`,
    {
      method: 'GET',
      mode: 'cors'
    }
  )
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

export const searchCharacters = (term: string) => (dispatch: Dispatch<Action>) => {
  fetch(
    `${BASE_URL}&page=1&search=${term}`,
    {
      method: 'GET',
      mode: 'cors'
    }
  )
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
