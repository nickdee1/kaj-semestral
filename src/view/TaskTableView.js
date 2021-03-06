import React from "react";
import Row from "react-bootstrap/Row";
import LeftBarComponent from "../component/left_bar/LeftBarComponent";
import LeftButtonBar from "../component/left_button_bar/LeftButtonBar";
import Board from "../component/task_board/board/Board";

class TaskTableView extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <LeftButtonBar/>
                    <LeftBarComponent/>
                    <Board/>
                </Row>
            </div>
        )
    }
}

export default TaskTableView