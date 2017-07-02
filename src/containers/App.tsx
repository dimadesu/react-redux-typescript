import './App.css';
import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect, Dispatch} from 'react-redux';
import {Characters} from '../components/Characters';
import {CharacterDetails} from '../components/CharacterDetails';
import {Search} from '../components/Search';
import {loadCharacters, searchCharacters} from '../actions/characters';
import {setCharacterDetails} from '../actions/characterDetails';
import {StoreState, CharacterState} from '../types/index';

interface Props extends StoreState {
  dispatch: Dispatch<any>;
}

export class App extends React.Component<Props, any> {
  componentDidMount() {
    const loadCharactersBound = bindActionCreators(loadCharacters, this.props.dispatch);
    loadCharactersBound();
  }

  render() {
    const { dispatch } = this.props;

    return (
      <div className="app">
        <h1>StarWars Characters App</h1>
        <Search
          onSearch={
            (term: string) => {
              dispatch(searchCharacters(term));
            }
          }
        />
        <div className="columns">
          <Characters
            characters={this.props.characters}
            onCharacterClick={
              (characterDetails: CharacterState) => {
                dispatch(setCharacterDetails(characterDetails));
              }}
          />
          <CharacterDetails
            {...this.props.characterDetails}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: Props) => {
  return {
    characters: state.characters,
    characterDetails: state.characterDetails
  };
};

export default connect(
  mapStateToProps,
)(App);
