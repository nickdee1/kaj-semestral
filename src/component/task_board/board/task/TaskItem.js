import React from "react";
import "./TaskItem.css"
import TaskInfo from "./task_info/TaskInfo";
import {Draggable, Droppable} from 'react-beautiful-dnd';


class TaskItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskInfoVisible: false
        }
    }

    setTaskInfoVisible(visible) {
        this.setState( {
            taskInfoVisible: visible
        })
    }

    render() {
        return (
          <Draggable
            key={this.props.id}
            draggableId={this.props.id}
            index={this.props.index}>
              {(provided) => (
                <div>
                    <div ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                            className="task-item">
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
                    <TaskInfo open={this.state.taskInfoVisible} onClose={() => this.setTaskInfoVisible(false)}/>
                </div>
              )}
          </Draggable>
    )
    }
}

export default TaskItem
