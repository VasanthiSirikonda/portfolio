import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiOpenai,
  SiGoogle,
  SiMicrosoftbing,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa";

function AITools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftbing />
      </Col>
    </Row>
  );
}

export default AITools;