import {
  LOAD_RANDOM_PAGES,
  LOAD_PAGE_DETAILS,
  DELETE_PAGE,
  BOOKMARK_PAGE,
  EMPTY_BOOKMARKS
} from '../constants/ActionTypes';

let storedBookmarks: string[];
storedBookmarks = window.localStorage.bookmarked != null ?
  JSON.parse(window.localStorage.bookmarked) :
  null;

let initialState: string[];
initialState = storedBookmarks || [];

interface ActionInterface {
  type: string;
  data: Array<any>;
  id: number;
  categories: string;
  image: string;
}

export default function pages(state: Array<any> = initialState, action: ActionInterface) {
  switch (action.type) {
  case LOAD_RANDOM_PAGES:
    return [...action.data, ...state];

  case LOAD_PAGE_DETAILS:
    return state.map(page => {
      if (page.id === action.id) {
        page.categories = action.categories;
        page.image = action.image;
      }
      return page;
    });

  case DELETE_PAGE:
    return state.filter(page => {
      if (page.id !== action.id) {
        if (page.bookmarked) {
          window.localStorage.bookmarked = JSON.stringify(
            JSON.parse(
              window.localStorage.bookmarked
            ).filter((page: ActionInterface) => page.id !== action.id)
          );
        }
        return true;
      }
      return false;
    });

  case BOOKMARK_PAGE:
    const newState = state.map(page =>
      page.id === action.id ?
        Object.assign({}, page, { bookmarked: !page.bookmarked }) :
        page
    );
    window.localStorage.bookmarked = JSON.stringify(
      newState.filter(page => page.bookmarked !== false)
    );
    return newState;

  case EMPTY_BOOKMARKS:
    window.localStorage.removeItem('bookmarked');
    return state.filter(page => page.bookmarked === false);

  default:
    return state;
  }
}
