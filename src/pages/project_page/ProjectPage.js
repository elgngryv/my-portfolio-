import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import eco from "../../images/eco.png";

import msc from "../../images/music.png";
import clc from "../../images/calculator.png";

import { FaCode } from "react-icons/fa";
export default function ProjectPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div className="d-flex justify-content-center" width="100%">
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                              }}>
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "white" }}>
                                  Flixor
                                </h5>
                                <img src={nyc} alt={nyc} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://intern-intelligence-movieapps.vercel.app/"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}>
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "rgba(0, 0, 0, 0.7)",
                                    color: "white",
                                    fontWeight: 600,
                                  }}>
                                  Flexor - A Modern TV Series Discovery
                                  Platform. This is a modern platform designed
                                  for TV series enthusiasts. Making it easy to
                                  discover popular and trending series. This
                                  project aims to provide a seamless and
                                  user-friendly experience. 🚀
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "rgba(0, 0, 0, 0.7)",
                                  color: "white",
                                  fontWeight: 600,
                                }}>
                                Nextjs,TailwindCss, Typescript,Responsiv Tmdb
                                api
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                              }}>
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "white" }}>
                                  Opera & Ballet theatre
                                </h5>
                                <img src={hd} alt={hd} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://final-project-opera-ballet.vercel.app/"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}>
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "rgba(0, 0, 0, 0.7)",
                                    color: "white",
                                    fontWeight: 600,
                                  }}>
                                  The Opera and Ballet Theatre project is a
                                  responsive platform that showcases the
                                  theater’s history, repertoire, and ticket
                                  availability, blending classical art with
                                  modern web technologies to engage a wider
                                  audience.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "rgba(0, 0, 0, 0.7)",
                                  color: "white",
                                  fontWeight: 600,
                                }}>
                                NextJs,TailwindCss, TypeScript, Nodejs,
                                ExpressJs,MongoDB,Redux
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProjectPage"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                              }}>
                              <div className="projectPageContent">
                                <h5 id={"first"} style={{ color: "white" }}>
                                  Portfolio
                                </h5>
                                <img src={ci} alt={ci} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/elgngryv/my-portfolio-"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}>
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "rgba(0, 0, 0, 0.7)",
                                    color: "white",
                                    fontWeight: 600,
                                  }}>
                                  Welcome to my personal portfolio. Explore my
                                  work, skills, and achievements in a concise
                                  and visually appealing format. Get a glimpse
                                  of my expertise and creativity.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "rgba(0, 0, 0, 0.7)",
                                  color: "white",
                                  fontWeight: 600,
                                }}>
                                HTML, CSS, SCSS, React, JavaScript,EmailJs
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                              }}>
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "white" }}>
                                  Music-Player
                                </h5>
                                <img src={msc} alt={msc} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={"https://music-player-g.vercel.app/"}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}>
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "rgba(0, 0, 0, 0.7)",
                                    color: "white",
                                    fontWeight: 600,
                                  }}>
                                  A personal music player that brings together
                                  my favorite melodies. Designed to play songs
                                  that match my mood, easily discover my
                                  favorite tracks, and enjoy the music.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "rgba(0, 0, 0, 0.7)",
                                  color: "white",
                                  fontWeight: 600,
                                }}>
                                HTML, CSS, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                              }}>
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "white" }}>
                                  Calculator
                                </h5>
                                <img src={clc} alt={clc} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://code-alpha-calculator-chi.vercel.app/"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}>
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "rgba(0, 0, 0, 0.7)",
                                    color: "white",
                                    fontWeight: 600,
                                  }}>
                                  It is a modern calculator designed to perform
                                  basic and advanced mathematical operations
                                  quickly and efficiently. With its clean
                                  interface and user-friendly design, it allows
                                  you to easily perform basic calculations.{" "}
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "rgba(0, 0, 0, 0.7)",
                                  color: "white",
                                  fontWeight: 600,
                                }}>
                                HTML, CSS, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                              }}>
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "white" }}>
                                  Makina.az
                                </h5>
                                <img src={eco} alt={clc} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={"https://makina-az.vercel.app/"}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}>
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "rgba(0, 0, 0, 0.7)",
                                    color: "white",
                                    fontWeight: 600,
                                  }}>
                                  Effortlessly access your account or sign up to
                                  get started with just a few clicks. Secure and
                                  easy login options ensure you can access your
                                  account anytime, anywhere.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "rgba(0, 0, 0, 0.7)",
                                  color: "white",
                                  fontWeight: 600,
                                }}>
                                TailwindCss, React, JavaScript, FireBase,Redux
                                node.js, express.js mongo.DB
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        <p>will continue...</p>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
