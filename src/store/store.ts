import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

function configureStore(initialState: object): Store<any> {
    const store = createStore(
        rootReducer,
        initialState, // {} as Store.All,
        applyMiddleware(thunk),
    );

    /*if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }*/

    return store;
}

const initialState = {
    enthusiasm: {
        enthusiasmLevel: 1,
        languageName: 'TypeScript',
    }
};

export const store = configureStore(initialState);
