import './App.css';
import * as React from 'react';
import {bindActionCreators, Action} from 'redux';
import {connect, Dispatch} from 'react-redux';
import {Characters} from '../components/Characters';
import {CharacterDetails} from '../components/CharacterDetails';
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
      <div className="app">
        <h1>StarWars Characters App</h1>
        <div className="columns">
          <Characters characters={this.props.characters} />
          <CharacterDetails {...this.props.characters[0]}/>
        </div>
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
