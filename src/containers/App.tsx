import * as React from 'react';
import {bindActionCreators, Action} from 'redux';
import {connect, Dispatch} from 'react-redux';
import {Characters} from '../components/Characters';
import {loadCharacters} from '../actions/characters';
import {CharacterState} from '../types/index';

interface Props {
  characters: CharacterState[];
  dispatch: Dispatch<Action>;
}

export const App = ({ characters, dispatch }: Props) => {
  const loadCharactersBound = bindActionCreators(loadCharacters, dispatch);
  loadCharactersBound();

  return (
    <div>
      Hello from App container
      <Characters characters={characters} />
    </div>
  );
};

const mapStateToProps = (state: Props) => {
  return {
    characters: state.characters,
  };
};

export default connect(
  mapStateToProps
)(App);
