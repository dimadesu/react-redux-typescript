import './UserSelector.css';
import * as React from 'react';
import {UserState} from '../types/index';

interface Props {
  users: UserState[];
  loginAsUser: Function;
}

export class UserSelector extends React.Component<Props, any> {
  renderUsers() {
    const _this = this;

    return this.props.users.map(
      (user, index) => {
        return (
          <span className="user" key={index} style={{color: user.color}} onClick={() => _this.props.loginAsUser(user)}>
            {user.name}
          </span>
        );
      }
    );
  }

  renderLoggedInUser() {
    return this.props.users
      .filter((user) => user.isLoggedIn)
      .map(
        (user, index) => {
          return (
            <span
              key={index}
              className="user"
              style={{color: user.color}}
            >
              {user.name}
            </span>
          );
        }
    );
  }

  render() {
    return (
      <div>
        <h4>
          Available Users:
          {this.renderUsers()}
          </h4>
        <h4>
          Logged in as:
          {this.renderLoggedInUser()}
        </h4>
      </div>
    );
  }
}
