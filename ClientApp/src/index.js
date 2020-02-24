import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { AddDScreenProvider, ShowDScreenProvider } from './context'
import App from './App';
import './App.scss'

const rootElement = document.getElementById('root');

ReactDOM.render(
    <AddDScreenProvider>
        <ShowDScreenProvider>
            <App />
        </ShowDScreenProvider>
    </AddDScreenProvider>,
    rootElement
);
