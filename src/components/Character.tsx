import * as React from 'react';
import {CharacterState} from '../types/index';

interface ExtendedCharacterState extends CharacterState {
  key?: number;
  onCharacterClick: Function;
}

export const Character = ({ name, gender, onCharacterClick }: ExtendedCharacterState) => {
  return (
    <div
      onClick={
        () => {
          onCharacterClick({
            name: name,
            gender: gender,
          });
        }
      }
    >
      <p>{name}</p>
    </div>
  );
};
