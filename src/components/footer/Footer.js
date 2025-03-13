import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaGoogle } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Garayev Elgun</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} EG</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/elgngryv/elgngryv"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/elgun-garayev-8282b623a/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="mailto:garayev.elgun.e@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <FaGoogle />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
