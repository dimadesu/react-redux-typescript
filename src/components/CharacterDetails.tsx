import './CharacterDetails.css';
import * as React from 'react';
import {CharacterState, UserState} from '../types/index';
import {Editor} from './Editor';

interface ExtendedCharacterState extends CharacterState {
  key?: number;
  users: UserState[];
}

export const CharacterDetails = (
  {
    id,
    name,
    gender,
    users
  }: ExtendedCharacterState
) => {
  return (
    <div className="character-details">
      <h2>Character Details</h2>
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>ID: {id}</p>
      <Editor users={users}/>
    </div>
  );
};
