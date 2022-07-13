import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import generateStore from './redux/store';
import App from './App';

import '../src/style/styles.scss'

const store = generateStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
    </>
);