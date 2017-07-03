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
          <div key={index} style={{color: user.color}} onClick={() => _this.props.loginAsUser(user)}>
            <div>ID: {user.id}</div>
            <div>Name: {user.name}</div>
            <div>Is Logged In: {user.isLoggedIn ? 'yes' : 'no'}</div>
          </div>
        );
      }
    );
  }

  render() {
    return (
      <div>
        <h4>Users</h4>
        {this.renderUsers()}
      </div>
    );
  }
}
