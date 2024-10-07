import React from "react";
import Card from "react-bootstrap/Card";
import { ImUser } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple"> Hyperial</span> is a material management application designed to help companies and organizations manage their material inventory <span className="purple"> efficiently</span> and <span className="purple"> effectively</span>. This application provides various features that make it easier to manage, monitor and track materials, so that users can optimize operations and reduce costs.
            <br />
            <br />
            <br />
            This website has 3 user roles in it
          </p>
          <ul>
            <li className="about-activity">
              <ImUser /> Admin
            </li>
            <li className="about-activity">
              <ImUser /> Project Manager
            </li>
            <li className="about-activity">
              <ImUser /> Vendors
            </li>
          </ul>
          <br />
          <br />
          <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
