import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Confirm from './Confirm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact={true} component={App}/>
        <Route path="/confirm" exact={true} component={Confirm}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

