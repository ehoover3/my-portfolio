import React from "react";
import AnimateLetters from "../components/AnimateLetters";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { AiFillBug, AiFillPieChart } from "react-icons/ai";
import { BsChatTextFill } from "react-icons/bs";

export default function Projects(props) {
  const handleTheme = props.handleTheme;
  const theme = props.theme;

  // styles
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "35px",
  };
  const cardStyle = {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    marginRight: "2.5vw",
  };
  const imgStyle = { margin: "20px", fontSize: 90 };

  // jsx section
  return (
    <div style={wrapperStyle} id='projects'>
      <div style={{ marginTop: "65px" }}> </div>
      <AnimateLetters words='PROJECTS' handleTheme={handleTheme} />

      <CardGroup style={{ marginLeft: "2.5vw" }}>
        <Card style={cardStyle} bg={theme.style.bootstrap} text={"white"}>
          <AiFillBug style={imgStyle} />
          <Card.Body>
            <Card.Title>Bug Tracker</Card.Title>
            <Card.Text>
              This app has user authentication, plus user and administrator login
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>ReactJS, MongoDB, CSS, Bootstrap</small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle} bg={theme.style.bootstrap} text={"white"}>
          <AiFillPieChart style={imgStyle} />
          <Card.Body>
            <Card.Title>Payroll Portal</Card.Title>
            <Card.Text>This app creates users and generates printable reports</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>ReactJS, MongoDB, CSS, Bootstrap</small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle} bg={theme.style.bootstrap} text={"white"}>
          <BsChatTextFill style={imgStyle} />
          <Card.Body>
            <Card.Title>Marketing Website</Card.Title>
            <Card.Text>
              This app allows users to comment, and add items to a shopping cart action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small style={{}}>ReactJS, MongoDB, CSS, Bootstrap</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}
