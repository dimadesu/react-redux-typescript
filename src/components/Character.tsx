import * as React from 'react';
import {CharacterState} from '../types/index';

interface ExtendedCharacterState extends CharacterState {
  key?: number;
}

export const Character = ({ name, gender }: ExtendedCharacterState) => (
  <div>
    <h3>{name}</h3>
  </div>
);
