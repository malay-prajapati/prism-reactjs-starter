import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWord from './examples/HelloWorld.jsx';
import ClusterWidget from './examples/ClustersWidget.jsx';
import QuickDashboard from './examples/QuickDashboard.jsx';
import registerServiceWorker from './registerServiceWorker';
import 'prism-reactjs/dist/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<HelloWord />, document.getElementById('root'));
// ReactDOM.render(<ClusterWidget />, document.getElementById('root'));
// ReactDOM.render(<QuickDashboard />, document.getElementById('root'));
registerServiceWorker();
