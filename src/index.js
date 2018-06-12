import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {devToolsEnhancer} from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './store/features/reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
