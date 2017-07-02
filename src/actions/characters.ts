import {Action} from 'redux';
import {Dispatch} from 'redux';
import {LOADING_CHARACTERS_SUCCEEDED} from '../constants/characters';
import {CharacterState} from '../types/index';

export const loadingCharacterSucceeded = (characters: CharacterState[]) => ({
  type: LOADING_CHARACTERS_SUCCEEDED,
  characters
});

export const loadCharacters = () => (dispatch: Dispatch<Action>) => {
  fetch(
    'https://swapi.co/api/people/?format=json&page=2',
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
      loadingCharacterSucceeded(characters)
    );
  });
};
