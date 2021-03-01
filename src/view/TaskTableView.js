import React from "react";
import Row from "react-bootstrap/Row";
import LeftBarComponent from "../component/left_bar/LeftBarComponent";
import LeftButtonBar from "../component/left_button_bar/LeftButtonBar";

class TaskTableView extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <LeftButtonBar/>
                    <LeftBarComponent/>
                </Row>
            </div>
        )
    }
}

export default TaskTableView