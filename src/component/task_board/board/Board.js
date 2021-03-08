import React from "react";
import Col from "react-bootstrap/Col";
import "./Board.css"
import TaskColumn from "./task_column/TaskColumn";

class Board extends React.Component {
    render() {
        return (
            <Col className="col-8 right-block">
                <span className="board-title-span">
                    <h1>Board</h1>
                </span>
                <span className="filter-span">
                    <p>Filter</p>
                </span>
                <div className="task-columns">
                    <TaskColumn name="TO DO" count="0"/>
                    <TaskColumn name="IN PROGRESS" count="1"/>
                    <TaskColumn name="DONE" count="2"/>
                </div>
            </Col>
        )
    }
}

export default Board