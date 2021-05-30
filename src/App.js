import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TaskTableView from "./view/TaskTableView";

import './App.css';
import Login from './view/login/Login';
import Register from './view/login/Register';
import Settings from './view/backlog/Settings';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/board" component={TaskTableView}/>
          <Route path="/backlog" component={Settings}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
