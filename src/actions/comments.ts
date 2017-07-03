import {SUBMIT_COMMENT} from '../constants/comments';
import {CommentState} from '../types/index';

export const submitComment = (comment: CommentState) => {
  return {
    type: SUBMIT_COMMENT,
    comment
  };
};
