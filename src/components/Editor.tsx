import * as React from 'react';
import {UserState} from '../types/index';

interface Props {
  users: UserState[];
}

export class Editor extends React.Component<Props, any> {
  render () {
    return (
      <div>
        Editor
      </div>
    );
  }
}
