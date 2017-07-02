import './Character.css';
import * as React from 'react';
import {CharacterState} from '../types/index';

interface ExtendedCharacterState extends CharacterState {
  key?: number;
  onCharacterClick: Function;
}

export const Character = ({ id, name, gender, onCharacterClick }: ExtendedCharacterState) => {
  return (
    <div
      className="character"
      onClick={
        () => {
          onCharacterClick({
            id: id,
            name: name,
            gender: gender,
          });
        }
      }
    >
      {name}
    </div>
  );
};
