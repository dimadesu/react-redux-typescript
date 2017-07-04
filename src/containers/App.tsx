import './App.css';
import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect, Dispatch} from 'react-redux';

import {Characters} from '../components/Characters';
import {CharacterDetails} from '../components/CharacterDetails';
import {Search} from '../components/Search';

// Actions
import {loadAllCharacters} from '../actions/characters';
import {searchCharacters} from '../actions/sortedAndFilteredCharacters';
import {setSearchTerm} from '../actions/searchTerm';
import {loginAsUser} from '../actions/users';
import {setCharacterDetails} from '../actions/characterDetails';
import {submitComment} from '../actions/comments';
import {setRating} from '../actions/ratings';

import {StoreState, CharacterState, UserState} from '../types/index';

interface Props extends StoreState {
  dispatch: Dispatch<any>;
}

export class App extends React.Component<Props, any> {
  componentDidMount() {
    bindActionCreators(loadAllCharacters, this.props.dispatch)();
  }

  renderCharacterDetails() {
    if (this.props.characterDetails) {
      const { dispatch } = this.props;

      return (
        <CharacterDetails
          characterDetails={this.props.characterDetails}
          comments={this.props.comments}
          users={this.props.users}
          ratings={this.props.ratings}
          loginAsUser={(user: UserState) => dispatch(loginAsUser(user))}
          submitComment={(comment: string) => dispatch(submitComment(comment))}
          setRating={(rating: number) => dispatch(setRating(rating))}
        />
      );
    } else {
      return;
    }
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
                  dispatch(setSearchTerm(term));
                }
              }
            />
            <Characters
              characters={this.props.sortedAndFilteredCharacters}
              onCharacterClick={
                (characterDetails: CharacterState) => {
                  dispatch(setCharacterDetails(characterDetails));
                }
              }
            />
          </div>
          {this.renderCharacterDetails()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: Props) => {
  return {
    characters: state.characters,
    searchTerm: state.searchTerm,
    sortedAndFilteredCharacters: state.sortedAndFilteredCharacters,
    characterDetails: state.characterDetails,
    users: state.users,
    ratings: state.ratings,
    comments: state.comments,
  };
};

export default connect(
  mapStateToProps,
)(App);
