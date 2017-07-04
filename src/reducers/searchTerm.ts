import {
  SET_SEARCH_TERM,
} from '../constants/searchTerm';

interface CustomAction {
  type: string;
  searchTerm: string;
}

export function searchTerm(state: string, action: CustomAction): string {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.searchTerm ? action.searchTerm + '' : '';
    default:
      return state ? state : '';
  }
}
