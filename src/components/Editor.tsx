import * as React from 'react';
import {UserState} from '../types/index';
import {UserSelector} from './UserSelector';

interface Props {
  users: UserState[];
}

export class Editor extends React.Component<Props, any> {
  render () {
    return (
      <div>
        <h3>Editor</h3>
        <UserSelector users={this.props.users}/>
      </div>
    );
  }
}
