import React, {useCallback} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TaskTableView from "./view/TaskTableView";

import './App.css';
import Login from './view/login/Login';
import Register from './view/login/Register';
import Settings from './view/settings/Settings';
import Profile from './view/profile/Profile';
import {DragDropContext} from 'react-beautiful-dnd';
import TestDnD from './view/settings/TestDnd';
import TeamBoard from './view/board/TeamBoard';

function App() {

  const onDragEnd = useCallback(() => {

  }, []);

  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/board" component={TaskTableView}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/test" component={TestDnD}/>
            <Route path="/board2" component={TeamBoard}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
