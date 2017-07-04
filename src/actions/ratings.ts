import {Action, Dispatch} from 'redux';
import {SET_RATING} from '../constants/ratings';
import {sortCharactersByRating} from './sortedAndFilteredCharacters';

export const setRating = (rating: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: SET_RATING,
    rating
  });

  dispatch(sortCharactersByRating());
};
