import './App.css';
import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect, Dispatch} from 'react-redux';

import {Characters} from '../components/Characters';
import {CharacterDetails} from '../components/CharacterDetails';
import {Search} from '../components/Search';

// Actions
import {loadAllCharacters, searchCharacters} from '../actions/characters';
import {loginAsUser} from '../actions/users';
import {setCharacterDetails} from '../actions/characterDetails';
import {submitComment} from '../actions/comments';

import {StoreState, CharacterState, UserState, CommentState} from '../types/index';

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
            users={this.props.users}
            loginAsUser={(user: UserState) => dispatch(loginAsUser(user))}
            submitComment={(comment: CommentState) => dispatch(submitComment(comment))}
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
    ratings: state.ratings,
    comments: state.comments,
  };
};

export default connect(
  mapStateToProps,
)(App);
