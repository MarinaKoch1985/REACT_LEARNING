import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componets/App';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='/home'>
    <App />
    </BrowserRouter>
);


