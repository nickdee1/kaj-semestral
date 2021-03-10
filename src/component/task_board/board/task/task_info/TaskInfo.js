import React from "react";
import "./TaskInfo.css"
import TextareaAutosize from 'react-autosize-textarea';

class TaskInfo extends React.Component {
    render() {
        return (
            <div>
                <div className="dark-background">
                </div>
                <div className="task-info">
                    <div className="project-name-and-close">
                        <p>Project Name / Id</p>
                        <img id="close-task-info-img" src={process.env.PUBLIC_URL + "/svg/" + "close" + ".svg"}/>
                    </div>
                    <div className="task-info-left-side">
                        <div>
                            <input id="task-name-input"/>
                            <form id="task-name-and-description-form">
                                <label id="task-description-label">Description</label>
                                <TextareaAutosize id="task-description-input"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskInfo