import {SET_SEARCH_TERM} from '../constants/searchTerm';

export const setSearchTerm = (searchTerm: string) => {
  return {
    type: SET_SEARCH_TERM,
    searchTerm
  };
};
