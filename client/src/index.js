import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

import getAppStore from './store/store';
import { Provider } from 'react-redux';
import { getIncomes } from './actions/incomes';
import { getExpenses } from './actions/expenses';

const store = getAppStore();
 
const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let Dispatch = (store.dispatch(getIncomes()), store.dispatch(getExpenses()));

Dispatch.then(() => {
    ReactDOM.render(template, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
