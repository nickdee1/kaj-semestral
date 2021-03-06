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
                <Col className="col-2 left-bar">
                    <TeamSignature/>
                    <LeftBarLinks/>
                </Col>
            </div>
        )
    }
}

export default LeftBarComponent