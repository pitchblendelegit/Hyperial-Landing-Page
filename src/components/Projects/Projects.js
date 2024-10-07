import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projects from "../../Assets/Projects/projects.png";
import order from "../../Assets/Projects/order.png";
import inventory from "../../Assets/Projects/inventory.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import user from "../../Assets/Projects/usermanagement.png";
import request from "../../Assets/Projects/request.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Hyperial -  <strong className="purple">Features </strong>
        </h1>
        <p style={{ color: "white" }}>
          This is the main feature of hyperial.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Dashboard"
              description="This dashboard feature includes a summary of total expenses based on invoices issued, total orders, total users, and total projects. Apart from that, this feature also displays graphs taken based on data from recaps of the main features."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={request}
              isBlog={false}
              title="Request"
              description="in this request feature, it is a request for ordering materials from a vendor which has displayed a list of materials from each vendor that can be ordered from more than 1 vendor and more than 1 material."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={order}
              isBlog={false}
              title="Orders"
              description="After requesting a material order, an order list table will appear, which will display material order request data and an invoice will be issued from each vendor whose material has been ordered."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projects}
              isBlog={false}
              title="Projects"
              description="This projects feature will display all projects from each project manager who has created a project. This feature will also automatically reduce materials in inventory according to the quantity that will be used by the project manager to start the project."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={user}
              isBlog={false}
              title="User Management"
              description="In this user management feature, admins can see all users who have registered with this application. Admins can also add new users according to their roles, so there is no signup feature when logging in at the start of the web application. Apart from that, admins can also delete users who no longer work with the company."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Inventory"
              description="This feature is the most important and most important, because this feature has been created automatically, where, when an order is received, it will automatically go into inventory which will increase the quantity or add new materials that do not yet exist. Apart from that, the reduced quantity in inventory is caused by projects that are about to start or are currently underway, which require materials."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
