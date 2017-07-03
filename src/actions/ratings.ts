import {SET_RATING} from '../constants/ratings';

export const setRating = (rating: number) => {
  return {
    type: SET_RATING,
    rating
  };
};
