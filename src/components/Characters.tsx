import * as React from 'react';
import {Character} from './Character';
import {CharacterState} from '../types/index';

interface Props {
  characters: CharacterState[];
}

export const Characters = ({ characters }: Props) => {
  function renderCharacters(_characters: CharacterState[]) {
    return (
      <div>
        {_characters.map(() => <Character/>)}
      </div>
    );
  }

  return (
    <div>
      Characters
      {renderCharacters(characters)}
    </div>
  );
};
