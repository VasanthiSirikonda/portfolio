import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todolist from "../../Assets/Projects/todolist.png";
import gameholic from "../../Assets/Projects/gameholic.png";
import Newsworld from "../../Assets/Projects/Newsworld.png";
import jntuhapp from "../../Assets/Projects/jntuhapp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gameholic}
              isBlog={false}
              title="Capstone"
              description="Here you can browse customer details, track business opportunities, and resolve support tickets in a centralized CRM platform."
              ghLink="https://github.com/VasanthiSirikonda/Capstone"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jntuhapp}
              isBlog={false}
              title="Library-Management-System"
              description="Developed a full-stack Library Management System with an interactive analytics dashboard (bar, line, pie charts, and tables) and modules for books, members, transactions, and users, supporting full CRUD operations and integrated Generative AI chatbot for intelligent user assistance."
              ghLink="https://github.com/VasanthiSirikonda/Library-Management-System"
              // demoLink="https://app.appsmith.com/app/jntuh-notes/home-6292423bb4c51656bfeabee9"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Newsworld}
              isBlog={false}
              title="SRE-Postmortem"
              description="Engineered an SRE Blameless Postmortem Artifact Management platform to centralize incident records and operational insights, featuring advanced search capabilities, severity-based dashboards, PDF reporting, role-based access control, and a Gemini-powered chatbot for intelligent query handling."
              ghLink="https://github.com/VasanthiSirikonda/SRE-Postmortem"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="Employee-Management-App"
              description="Built a scalable Employee Management System supporting employee management, timesheet logging, and task tracking with full CRUD functionality, integrated with role-based access control and reporting dashboards."
              ghLink="https://github.com/VasanthiSirikonda/Employee-Management-App"
              // demoLink="https://mytodolist5.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="SpreadSheetApp"
              description="Engineered a spreadsheet platform with capabilities including multi-sheet management, real-time cell editing, formatting tools (bold, alignment, currency, percentage), interactive dashboard, and backend integration for persistent storage and data export."
              ghLink="https://github.com/VasanthiSirikonda/SpreadSheetApp"
              // demoLink="https://mytodolist5.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
