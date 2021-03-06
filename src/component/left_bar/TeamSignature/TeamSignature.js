import React from "react";
import "./TeamSignature.css"

class TeamSignature extends React.Component {
    render() {
        return (
            <div className="team-signature-container">
                <span className="avatar-and-team">
                    <div className="team-avatar" />
                    <div className="team-name-and-description">
                        <b className="team-name">Team name</b>
                        <p className="team-description">Team description</p>
                    </div>
                </span>
            </div>
        )
    }
}

export default TeamSignature