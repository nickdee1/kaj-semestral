import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import "./LeftBarComponent.css"

class LeftBarComponent extends React.Component {
    render() {
        return (
            <div>
                <Col className="col-2 left-bar">
                    <h4>Task Manager</h4>
                    <br/>
                    <Button className="btn btn-light btn-block text-left">Log in</Button>
                    <Button className="btn btn-light btn-block text-left">Register</Button>
                </Col>
            </div>
        )
    }
}

export default LeftBarComponent