import './CharacterDetails.css';
import * as React from 'react';
import {CharacterState, UserState, CommentState, RatingState} from '../types/index';
import {Editor} from './Editor';
import {CommentsList} from './CommentsList';

interface ExtendedCharacterState extends CharacterState {
  key?: number;
  comments: CommentState[];
  users: UserState[];
  ratings: RatingState[];
  loginAsUser: Function;
  submitComment: Function;
}

export const CharacterDetails = (
  {
    id,
    name,
    gender,

    comments,
    users,
    ratings,
    loginAsUser,
    submitComment
  }: ExtendedCharacterState
) => {
  const filteredComments = comments.filter(comment => comment.characterId === id);
  const loggedInUser = users.filter(user => user.isLoggedIn)[0];
  const characterRatingByUser = ratings.find(rating => rating.characterId === id && rating.userId === loggedInUser.id);

  return (
    <div className="character-details">
      <h2>Character Details</h2>
      <p><b>Name</b> {name}</p>
      <p><b>Gender</b> {gender}</p>
      <p><b>ID</b> {id}</p>
      <CommentsList
        comments={filteredComments}
      />
      <Editor
        users={users}
        rating={characterRatingByUser}
        loginAsUser={(user: UserState) => loginAsUser(user)}
        submitComment={(comment: string) => submitComment(comment)}
      />
    </div>
  );
};
