import React from "react";
import "./LinkLeftBar.css"

class LinkLeftBar extends React.Component {
    render() {
        return (
            <div className="link-left-bar">
                <span className="link-name-span">
                    <img src={process.env.PUBLIC_URL + "/svg/" + this.props.img + ".svg"}/>
                    <p>{this.props.name}</p>
                </span>
            </div>
        )
    }
}

export default LinkLeftBar