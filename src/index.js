import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); //create root of our application - this is the only place in entire app where we're fetching from dom

root.render(<App />);