import React from "react";
import "./TaskColumn.css"
import TaskItem from "../task/TaskItem";

class TaskColumn extends React.Component {
    render() {
        return (
            <div className="task-column">
                <div className="column-name-div">
                    <b>{this.props.name}</b>
                    <p>{this.props.count}</p>
                </div>
                <div className="tasks-container">
                    <TaskItem/>
                </div>
            </div>
        )
    }
}

export default TaskColumn