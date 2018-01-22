import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'prism-reactjs/dist/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
