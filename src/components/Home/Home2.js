import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/hyperial_logo_only.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              INTRODUCING <span className="purple"> HYPERIAL </span>
            </h1>
            <p className="home-about-body">
              <br />
              <br />A Cloud-Based Material Management Information System (MMIS) is an advanced, digital solution designed to streamline and optimize the management of materials and inventory within an organization. Leveraging cloud computing technology, this system provides real-time access to data and resources, enabling efficient tracking, monitoring, and control of materials from anywhere, at any time.
              <br />
              <br />Hyperial is made with 
              <b className="purple"> ReactJs, ExpressJS, Mysql, and Google Cloud Service (GCP). </b>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bethoventigauw"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mauricio-bethoven-tigauw-2490a9255/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/bethopnn/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
