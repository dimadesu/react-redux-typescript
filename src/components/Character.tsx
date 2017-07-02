import * as React from 'react';
import {CharacterState} from '../types/index';

export const Character = ({ name, gender }: CharacterState) => (
  <div>
    <h3>{name}</h3>
    <p>{gender}</p>
  </div>
);
