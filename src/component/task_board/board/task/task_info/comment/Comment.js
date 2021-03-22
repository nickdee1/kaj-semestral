import React from "react";
import "./Comment.css"

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <div className="avatar">
                    <div className="user-avatar"/>
                </div>
                <div className="text-block">
                    <div className="name-and-date">
                        <b>Name</b>
                        <p>Date</p>
                    </div>
                    <div className="comment-text">
                        <p>
                            Test test test tste
                        </p>
                        <p id="delete-link">
                            Delete
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment