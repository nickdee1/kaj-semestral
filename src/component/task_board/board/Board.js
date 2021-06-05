import React from "react";
import Col from "react-bootstrap/Col";
import "./Board.css"
import TaskColumn from "./task_column/TaskColumn";
import tasks from "../../../mock/tasks";
import {Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import {DragDropContext} from 'react-beautiful-dnd';
import TeamBoard from '../../../view/board/TeamBoard';

class Board extends React.Component {

    getTasks(state) {
        return tasks.filter(t => t.state === state)
    }

    render() {
        return (
            <Col className="right-block">
                <span className="board-title-span">
                    <h1>Board</h1>
                </span>
              <div className="task-columns">
                <TeamBoard/>
              </div>
            </Col>
        )
    }
}

export default Board
