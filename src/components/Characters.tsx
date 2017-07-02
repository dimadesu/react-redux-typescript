import * as React from 'react';
import {Character} from './Character';
import {CharacterState} from '../types/index';

interface Props {
  characters: CharacterState[];
}

export class Characters extends React.Component<Props, any> {
  renderCharacters(_characters: CharacterState[]) {
    return (
      _characters.map(
        (character, index) => (
          <Character {...character} key={index} />
        )
      )
    );
  }

  render() {
    return (
      <div>
        <h2>Characters List</h2>
        {this.renderCharacters(this.props.characters)}
      </div>
    );
  }
}
