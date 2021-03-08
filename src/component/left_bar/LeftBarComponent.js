import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import "./LeftBarComponent.css"
import TeamSignature from "./TeamSignature/TeamSignature";
import LeftBarLinks from "./LeftBarLinks/LeftBarLinks";

class LeftBarComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="left-bar">
                    <TeamSignature/>
                    <LeftBarLinks/>
                </div>
            </div>
        )
    }
}

export default LeftBarComponent