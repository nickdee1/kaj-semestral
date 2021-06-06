import React, {useCallback, useState} from 'react';
import  { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import TaskTableView from "./view/TaskTableView";

import './App.css';
import Login from './view/login/Login';
import Register from './view/login/Register';
import Settings from './view/settings/Settings';
import Profile from './view/profile/Profile';
import TestDnD from './view/settings/TestDnd';
import TeamBoard from './view/board/TeamBoard';
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
            <Route path="/profile">
              {!isInProject() ? <Redirect to="/"/> : <Profile/>}
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
