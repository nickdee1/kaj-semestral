import React from 'react';
import LeftBarComponent from '../component/left_bar/LeftBarComponent';
import LeftButtonBar from '../component/left_button_bar/LeftButtonBar';
import Board from '../component/task_board/board/Board';
import './TaskTableView.css'

/**
 * Component showing table with tasks
 * */
const TaskTableView = () => {

  let name = localStorage.getItem('project')
  let goals = localStorage.getItem('projectGoal')

  if (!name || !goals) {
    name = "Project"
    goals = "Goals"
  }
  return (
    <div className="board-page-container">
      <LeftButtonBar/>
      <LeftBarComponent goals={goals} project={name}/>
      <Board/>
    </div>
  )

}

export default TaskTableView
