import {StoreState, RatingState} from '../types/index';
import {SET_RATING} from '../constants/ratings';

interface CustomAction {
  type: string;
  rating: number;
}

export function ratings(state: StoreState, action: CustomAction): RatingState[] {
  switch (action.type) {
    case SET_RATING:
      const loggedInUser = state.users.filter(user => user.isLoggedIn)[0];

      const _state = state.ratings.slice();

      _state.push({
        id: state.ratings.length,
        value: action.rating,
        userId: loggedInUser.id,
        characterId: state.characterDetails.id,
      });

      return _state;
    default:
      return state.ratings ? state.ratings : [];
  }
}
