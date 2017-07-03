import './CharacterDetails.css';
import * as React from 'react';
import {CharacterState, UserState, CommentState} from '../types/index';
import {Editor} from './Editor';

interface ExtendedCharacterState extends CharacterState {
  key?: number;
  users: UserState[];
  loginAsUser: Function;
  submitComment: Function;
}

export const CharacterDetails = (
  {
    id,
    name,
    gender,
    users,
    loginAsUser,
    submitComment
  }: ExtendedCharacterState
) => {
  return (
    <div className="character-details">
      <h2>Character Details</h2>
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>ID: {id}</p>
      <Editor
        users={users}
        loginAsUser={(user: UserState) => loginAsUser(user)}
        submitComment={(comment: CommentState) => submitComment(comment)}
      />
    </div>
  );
};
