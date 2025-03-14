import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import Slide from "react-reveal/Slide";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://lottie.host/436b63c7-22ad-4b8c-b3a2-0d226058f346/P30SiYnZxE.lottie"
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



{/* <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script> */}
{/* <dotlottie-player src="" background="transparent" speed="1" style="width: 300px; height: 300px" loop autoplay></dotlottie-player> */}