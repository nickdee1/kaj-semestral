import React from "react";
import "./Board.css"
import TaskColumn from "./task_column/TaskColumn";

class Board extends React.Component {
    render() {
        return (
            <div className="right-block">
                <span className="board-title-span">
                    <h1>Board</h1>
                </span>
                <span className="filter-span">
                    <p>Filter</p>
                </span>
                <div className="task-columns">
                    <TaskColumn/>
                    <TaskColumn/>
                    <TaskColumn/>
                </div>
            </div>
        )
    }
}

export default Board