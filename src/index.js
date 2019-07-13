import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
