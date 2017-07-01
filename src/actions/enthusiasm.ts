import { createAction } from 'redux-actions';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/enthusiasm';

export const incrementEnthusiasm = createAction(
    INCREMENT_ENTHUSIASM
);

export const decrementEnthusiasm = createAction(
    DECREMENT_ENTHUSIASM
);
