import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import LeftBarComponent from "../component/left_bar/LeftBarComponent";
import LeftButtonBar from "../component/left_button_bar/LeftButtonBar";
import Board from "../component/task_board/board/Board";
import "./TaskTableView.css"

class TaskTableView extends React.Component {
    render() {
        return (
            <div className="board-page-container">
                <LeftButtonBar/>
                <LeftBarComponent/>
                <Board/>
            </div>
        )
    }
}

export default TaskTableView