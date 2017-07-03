import * as React from 'react';
import {RatingState} from '../types/index';

interface Props {
  rating?: RatingState;
  onSetRating: Function;
}

export class RatingEditor extends React.Component<Props, any> {
  render() {
    return (
      <div className="rating">
        Rate
        <button>-1</button>
        <button>0</button>
        <button>+1</button>
      </div>
    );
  }
}
