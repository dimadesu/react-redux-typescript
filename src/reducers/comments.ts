import {CommentState} from '../types/index';
import {SUBMIT_COMMENT} from '../constants/comments';

interface CustomAction {
  type: string;
  comment: CommentState;
}

export function comments(state: CommentState[], action: CustomAction): CommentState[] {
  switch (action.type) {
    case SUBMIT_COMMENT:
      return state.concat(action.comment);
    default:
      return state ? state : [];
  }
}
