import React from "react";
import AnimateLetters from "../components/AnimateLetters";

// bootstrap
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// react icons
import { FaDeaf, FaLaptopCode, FaCodeBranch } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";

export default function About(props) {
  const theme = props.theme;
  const handleTheme = props.handleTheme;

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginTop: "35px",
  };
  const cardStyle = { display: "flex", flexDirection: "row" };
  const cardTitleStyle = { display: "flex", justifyContent: "center", alignItems: "center" };
  const imgStyle = { margin: "20px", fontSize: 90 };
  const paragraphStyle = { margin: "5px" };
  const accordionStyle = { marginLeft: "2.5vw", marginRight: "2.5vw" };
  const accordionHeaderStyle = { color: "red", backgroundColor: "red" };

  return (
    <div style={wrapperStyle} id='about'>
      <div style={{ marginTop: "65px" }}> </div>
      <AnimateLetters words='ABOUT' handleTheme={handleTheme} />

      <Accordion style={accordionStyle}>
        <Accordion.Item eventKey='0'>
          <Accordion.Header className={theme.class}>Why I Value Accesibility</Accordion.Header>
          <Accordion.Body>
            <Card style={cardStyle}>
              <FaDeaf style={imgStyle} />
              <Card.Title style={cardTitleStyle}>
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
          <Accordion.Header className={theme.class}>How I First Started Coding</Accordion.Header>
          <Accordion.Body>
            <Card style={cardStyle}>
              <HiCursorClick style={imgStyle} />
              <Card.Title style={cardTitleStyle}>
                <p style={paragraphStyle}>
                  When I was a finacial advisor, I programmed a college value calculator and
                  one-click template emails.
                </p>
                <p style={paragraphStyle}>This immediate impact sparked me into coding.</p>
              </Card.Title>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header className={theme.class}>
            What I Teach as a Bootcamp Instructor
          </Accordion.Header>
          <Accordion.Body>
            <Card style={cardStyle}>
              <FaLaptopCode style={imgStyle} />
              <Card.Title style={cardTitleStyle}>
                <p>I teach Javascript, CSS, HTML, React, Node, Express, MongoDB, and SQL.</p>
              </Card.Title>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3'>
          <Accordion.Header className={theme.class}>
            Where I'm Headed as a Software Engineer
          </Accordion.Header>
          <Accordion.Body>
            <Card style={cardStyle}>
              <FaCodeBranch style={imgStyle} />
              <Card.Title style={cardTitleStyle}>
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
