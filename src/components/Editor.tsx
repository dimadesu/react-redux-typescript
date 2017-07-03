import * as React from 'react';
import {UserState} from '../types/index';
import {UserSelector} from './UserSelector';

interface Props {
  users: UserState[];
  loginAsUser: Function;
}

export class Editor extends React.Component<Props, any> {
  render () {
    const { loginAsUser } = this.props;

    return (
      <div>
        <h3>Editor</h3>
        <UserSelector {...this.props} loginAsUser={(user: UserState) => loginAsUser(user)}/>
      </div>
    );
  }
}
