import React, {useCallback, useState} from 'react';
import  { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import TaskTableView from "./view/TaskTableView";

import './App.css';
import Settings from './view/settings/Settings';
import FirstPage from './view/greetings/FirstPage';

function App() {

  const isInProject = () => {
    return (localStorage.getItem("project") && localStorage.getItem("projectGoal") && localStorage.getItem("projectId"))
  }

  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/board">
              {!isInProject() ? <Redirect to="/"/> : <TaskTableView/>}
            </Route>
            <Route path="/settings">
              {!isInProject() ? <Redirect to="/"/> : <Settings/>}
            </Route>
            <Route path="/">
              {isInProject() ? <Redirect to="/board"/> : <FirstPage/>}
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
