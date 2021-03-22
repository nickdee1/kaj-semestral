import React from "react";
import "./TaskColumn.css"
import TaskItem from "../task/TaskItem";
import TaskInfo from "../task/task_info/TaskInfo";

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
                <div className="tasks-container">
                    {this.getTasks()}
                </div>
            </div>
        )
    }
}

export default TaskColumn