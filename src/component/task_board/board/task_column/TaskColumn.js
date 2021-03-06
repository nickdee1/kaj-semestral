import React from "react";
import "./TaskColumn.css"

class TaskColumn extends React.Component {
    render() {
        return (
            <div className="task-column">
                <div className="column-name-div">
                    <b>TO DO</b>
                    <p>1</p>
                </div>
            </div>
        )
    }
}

export default TaskColumn