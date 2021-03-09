import React from "react";
import Col from "react-bootstrap/Col";
import "./Board.css"
import TaskColumn from "./task_column/TaskColumn";
import tasks from "../../../mock/tasks";

class Board extends React.Component {

    getTasks(state) {
        return tasks.filter(t => t.state === state)
    }

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
                    <TaskColumn name="TO DO" count="0" tasks={this.getTasks("TO DO")}/>
                    <TaskColumn name="IN PROGRESS" count="0" tasks={this.getTasks("IN PROGRESS")}/>
                    <TaskColumn name="IN TEST" count="0" tasks={this.getTasks("IN TEST")}/>
                    <TaskColumn name="DONE" count="0" tasks={this.getTasks("DONE")}/>
                </div>
            </Col>
        )
    }
}

export default Board