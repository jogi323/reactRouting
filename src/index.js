import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header';
import About from './about';
import App from './App';
import './index.css';

ReactDOM.render((
  <Router>
    <div>
    <Route path={"/login"} component={App}></Route>
    <Route path={"/header"} component={Header}></Route>
    <Route path={"/about"} component={About}></Route>
    </div>
  </Router>
)
  
  ,document.getElementById('root')
);
