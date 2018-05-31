import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './Reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer)

render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();