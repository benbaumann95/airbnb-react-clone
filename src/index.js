import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Hello from './hello.js'

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
