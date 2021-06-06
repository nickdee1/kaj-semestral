import React from "react";
import Col from "react-bootstrap/Col";
import "./Board.css"
import TeamBoard from '../../../view/board/TeamBoard';

const Board = ({db}) => {

  return (
    <Col className="right-block">
      <span className="board-title-span">
        <h1>Board</h1>
      </span>
      <div className="task-columns">
        <TeamBoard db={db}/>
      </div>
    </Col>
  )

}

export default Board
