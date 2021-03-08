import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./LeftButtonBar.css"

class LeftButtonBar extends React.Component {
    render() {
        return (
            <div>
                <div className="left-button-bar">
                    <div className="upper-images">
                        <img id="logo" src={process.env.PUBLIC_URL + "/svg/" + "logo" + ".svg"}/>
                        <img id="add" src={process.env.PUBLIC_URL + "/svg/" + "plus_add" + ".svg"}/>
                    </div>
                    <div className="bottom-images">
                        <div className="help-and-avatar">
                            <img id="help" src={process.env.PUBLIC_URL + "/svg/" + "help" + ".svg"}/>
                            <img id="user-avatar"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftButtonBar