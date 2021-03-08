import React from "react";
import "./TaskColumn.css"

class TaskColumn extends React.Component {
    render() {
        return (
            <div className="task-column">
                <div className="column-name-div">
                    <b>{this.props.name}</b>
                    <p>{this.props.count}</p>
                </div>
            </div>
        )
    }
}

export default TaskColumn