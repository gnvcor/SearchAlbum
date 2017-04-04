import React from 'react';

import ReactDOM from 'react-dom';

import Kernel from './components/Kernel';

import store from './store';

import { Provider } from 'react-redux';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Kernel />
    </Provider>,
    document.getElementById('root')
);