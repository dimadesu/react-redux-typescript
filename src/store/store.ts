import {createStore, applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

function configureStore(initialState: object): Store<any> {
  const store = createStore(
    rootReducer,
    initialState, // {} as Store.All,
    applyMiddleware(thunk),
  );

  return store;
}

const initialState = {
  characters: []
};

export const store = configureStore(initialState);
