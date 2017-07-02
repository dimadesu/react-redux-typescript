import * as React from 'react';
import {Character} from './Character';
import {CharacterState} from '../types/index';

interface Props {
  characters: CharacterState[];
}

export class Characters extends React.Component<Props, any> {
  renderCharacters(_characters: CharacterState[]) {
    return (
      <div>
        {_characters.map(() => <Character/>)}
      </div>
    );
  }

  render() {
    return (
      <div>
        Characters
        {this.renderCharacters(this.props.characters)}
      </div>
    );
  }
}
