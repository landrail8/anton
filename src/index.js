import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
import './index.css';

// import App from './App';
import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const history = createHistory();

ReactDOM.render(
  // <ConnectedRouter history={history}>
    <App />
  // </ConnectedRouter>  
  , document.getElementById('root'));
registerServiceWorker();
