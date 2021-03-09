import React from "react";
import "./TaskItem.css"


class TaskItem extends React.Component {
    render() {
        return (
            <div className="task-item">
                <p>Task name</p>
                <div className="tag-and-points">
                    <div>
                        <div className="tag">
                            <b>Clever tag</b>
                        </div>
                        <div className="points-container">
                            <b>3</b>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskItem