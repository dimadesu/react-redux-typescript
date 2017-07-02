import './CharacterDetails.css';
import * as React from 'react';
import {CharacterState} from '../types/index';

interface ExtendedCharacterState extends CharacterState {
  key?: number;
}

export const CharacterDetails = (
  {
    name,
    gender
  }: ExtendedCharacterState
) => {
  return (
    <div className="character-details">
      <h2>Character Details</h2>
      <p>{name}</p>
      <p>{gender}</p>
    </div>
  );
};
