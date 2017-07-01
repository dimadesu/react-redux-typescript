import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { store } from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
