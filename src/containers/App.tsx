import './App.css';
import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect, Dispatch} from 'react-redux';
import {Characters} from '../components/Characters';
import {CharacterDetails} from '../components/CharacterDetails';
import {Search} from '../components/Search';
import {loadAllCharacters, searchCharacters} from '../actions/characters';
import {setCharacterDetails} from '../actions/characterDetails';
import {StoreState, CharacterState} from '../types/index';

interface Props extends StoreState {
  dispatch: Dispatch<any>;
}

export class App extends React.Component<Props, any> {
  componentDidMount() {
    bindActionCreators(loadAllCharacters, this.props.dispatch)();
  }

  render() {
    const { dispatch } = this.props;

    return (
      <div className="app">
        <h1>StarWars Characters App</h1>
        <div className="columns">
          <div className="search-and-characters">
            <Search
              onSearch={
                (term: string) => {
                  dispatch(searchCharacters(term));
                }
              }
            />
            <Characters
              characters={this.props.characters}
              onCharacterClick={
                (characterDetails: CharacterState) => {
                  dispatch(setCharacterDetails(characterDetails));
                }
              }
            />
          </div>
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
    characterDetails: state.characterDetails,
    users: state.users,
  };
};

export default connect(
  mapStateToProps,
)(App);
