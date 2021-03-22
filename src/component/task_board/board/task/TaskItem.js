import React from "react";
import "./TaskItem.css"
import TaskInfo from "./task_info/TaskInfo";


class TaskItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskInfoVisible: false
        }
    }

    setTaskInfoVisible(visible) {
        this.setState( {
            taskInfoVisible: visible
        })
    }

    render() {
        return (
            <div>
                <div className="task-item" onClick={() => this.setTaskInfoVisible(true)}>
                    <p>{this.props.name}</p>
                    <div className="tag-and-points">
                        <div>
                            <div className="tag">
                                <b>{this.props.tag}</b>
                            </div>
                            <div className="points-container">
                                <b>{this.props.points}</b>
                            </div>
                        </div>
                    </div>
                </div>
                <TaskInfo open={this.state.taskInfoVisible} onClose={() => this.setTaskInfoVisible(false)}/>
            </div>
        )
    }
}

export default TaskItem