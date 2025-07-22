import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'font-awesome/css/font-awesome.css';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import ProductReducer from './redux/reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(ProductReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // creating store

root.render(<Provider store={store}>
    <App />
</Provider>); // calling Main Component
