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

export class App extends React.Component<Props, any> {
  componentDidMount() {
    const loadCharactersBound = bindActionCreators(loadCharacters, this.props.dispatch);
    loadCharactersBound();
  }

  render() {
    return (
      <div>
        Hello from App container
        <Characters characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state: Props) => {
  return {
    characters: state.characters,
  };
};

export default connect(
  mapStateToProps,
)(App);
