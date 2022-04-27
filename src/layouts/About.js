import React from "react";

// bootstrap
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// react icons
import { FaDeaf, FaLaptopCode, FaCodeBranch } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";

export default function About() {
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",

    textAlign: "center",
    marginTop: "35px",
  };

  const cardStyle = { display: "flex", justifyContent: "center", alignItems: "center" };
  const imgStyle = { margin: "20px", fontSize: 90 };
  const paragraphStyle = { margin: "5px" };

  return (
    <div style={wrapperStyle} id='about'>
      <h2 style={{ marginTop: "65px" }}>ABOUT</h2>

      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Why I Value Accesibility</Accordion.Header>
          <Accordion.Body>
            <Card style={{ display: "flex", flexDirection: "row" }}>
              <FaDeaf style={imgStyle} />
              <Card.Title style={cardStyle}>
                <p style={paragraphStyle}>
                  With a deaf mother and dyslexic brother, communicating effectively is everything.
                </p>
                <p style={paragraphStyle}>
                  I value accessibility, insightful UI, and strive to better connect info to people.
                </p>
              </Card.Title>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>How I First Started Coding</Accordion.Header>
          <Accordion.Body>
            <Card style={{ display: "flex", flexDirection: "row" }}>
              <HiCursorClick style={imgStyle} />
              <Card.Title style={cardStyle}>
                <p style={paragraphStyle}>
                  When I was a finacial advisor, I programmed a college value calculator and
                  one-click template emails.
                </p>
                <p style={paragraphStyle}>This impact sparked me into coding. </p>
              </Card.Title>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>What I Teach as a Bootcamp Instructor</Accordion.Header>
          <Accordion.Body>
            <Card style={{ display: "flex", flexDirection: "row" }}>
              <FaLaptopCode style={imgStyle} />
              <Card.Title style={cardStyle}>
                <p>I teach Javascript, CSS, HTML, React, Node, Express, MongoDB, and SQL.</p>
              </Card.Title>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>Where I'm Headed as a Software Engineer</Accordion.Header>
          <Accordion.Body>
            <Card style={{ display: "flex", flexDirection: "row" }}>
              <FaCodeBranch style={imgStyle} />
              <Card.Title style={cardStyle}>
                <p>
                  While I'm thankful to teach, my goal is to build great products and services that
                  improve people's quality of life.
                </p>
              </Card.Title>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
