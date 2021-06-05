import React from "react";
import "./TaskColumn.css"
import TaskItem from "../task/TaskItem";
import TaskInfo from "../task/task_info/TaskInfo";
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';

const tasks = [
  {
    id: '1',
    name: "Task 1",
    tag: "tag 1",
    state: "TO DO",
    points: 2
  },
  {
    id: '2',
    name: "Task 2",
    tag: "tag 2",
    state: "TO DO",
    points: 2
  },
  {
    id: '3',
    name: "Task 2",
    tag: "tag 2",
    state: "IN PROGRESS",
    points: 5
  }
]


class TaskColumn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: props.tasks
        }
    }

    getTasks() {
        if (this.state.tasks !== undefined) {
            return this.state.tasks.map(t =>
                <TaskItem name={t.name} tag={t.tag} points={t.points} />
            )
        }
        return null
    }

    render() {
        return (
            <div className="task-column">
                <div className="column-name-div">
                    <b>{this.props.name}</b>
                    <p>{this.props.count}</p>
                </div>
              <Droppable droppableId={this.props.name}>
                {(provided) => (
                  <div ref={provided.innerRef} className="tasks-container">
                    {tasks.map((task, index) => (
                      <TaskItem index={index} id={task.id} name={task.name} tag={task.tag} points={task.points}/>
                    ))}
                  </div>
                )}
              </Droppable>
            </div>
        )
    }
}

export default TaskColumn
