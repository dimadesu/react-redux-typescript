import * as React from 'react';
import {UserState} from '../types/index';

interface Props {
  users: UserState[];
}

export class UserSelector extends React.Component<Props, any> {
  renderUsers() {
    return this.props.users.map(
      (user, index) => {
        return (
          <div key={index}>
            <div>User ID: {user.id}</div>
            <div>User name: {user.name}</div>
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
