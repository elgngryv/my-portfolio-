import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                I am <b className="purple">Elgun Garayev</b>, working as a{" "}
                <b className="purple">Full Stack Developer</b>.
                <br />
                <br />
                I studied Web Development at Code Academy and have 3 years of
                experience as a Frontend Developer.
                <br />
                <br />
                Technologies and tools I work with:
                <b className="purple">
                  React.js, Next.js, Node.js, Express.js, MongoDB, Mongoose,
                  Redux Toolkit, Context API.
                </b>
                <br />
                <br />
                Experience with UI libraries and design systems:
                <b className="purple">
                  {" "}
                  Bootstrap, Material UI, Ant Design, Chakra UI, Tailwind CSS.{" "}
                </b>
                <br />
                <br />
                Experience in Backend and API integrations:
                <b className="purple">
                  {" "}
                  Firebase, REST APIs, GraphQL, Postman.{" "}
                </b>
                <br />
                <br />
                In my free time, I enjoy learning new technologies, working on
                innovative projects, and
                <b className="purple">
                  {" "}
                  developing new web technologies and products.{" "}
                </b>
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
