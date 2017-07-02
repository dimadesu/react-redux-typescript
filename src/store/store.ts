import {createStore, applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

function configureStore(): Store<any> {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
  );

  return store;
}

export const store = configureStore();
