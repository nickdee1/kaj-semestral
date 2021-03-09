import React from "react";
import "./TaskItem.css"


class TaskItem extends React.Component {
    render() {
        return (
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
        )
    }
}

export default TaskItem