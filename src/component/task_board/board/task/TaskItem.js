import React from "react";
import "./TaskItem.css"
import TaskInfo from "./task_info/TaskInfo";


class TaskItem extends React.Component {
    render() {
        return (
            <div>

                <div className="task-item">
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

                <TaskInfo/>
            </div>
        )
    }
}

export default TaskItem