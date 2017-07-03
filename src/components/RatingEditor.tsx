import './RatingEditor.css';
import * as classNames from 'classnames';
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
        Rating:{' '}
        <button
          className={
            classNames([
              'rating__button',
              {
                'is-rating-active': this.props.rating && this.props.rating.value < 0
              }
            ])
          }
        >
          -1
        </button>
        <button
          className={
            classNames([
              'rating__button',
              {
                'is-rating-active': (
                  !this.props.rating ||
                  (this.props.rating && !this.props.rating.value)
                )
              }
            ])
          }
        >
          0
        </button>
        <button
          className={
            classNames([
              'rating__button',
              {
                'is-rating-active': this.props.rating && this.props.rating.value > 0
              }
            ])
          }
        >
          +1
        </button>
      </div>
    );
  }
}
