import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import bugtracker from "../images/bugtracker.png";
import payroll from "../images/payroll.png";
import marketing from "../images/marketing.png";

export default function Projects() {
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "35px",
  };

  // jsx section
  return (
    <div style={wrapperStyle} id='projects'>
      <h2 style={{ marginTop: "65px" }}>PROJECTS</h2>
      <CardGroup>
        <Card>
          <Card.Img
            variant='top'
            src={bugtracker}
            alt='magnifying glass inspecting an image of a bug on a monitor'
          />
          <Card.Body>
            <Card.Title>Bug Tracker</Card.Title>
            <Card.Text>
              This app has user authentication, plus user and administrator login
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>ReactJS, MongoDB, CSS, and Bootstrap</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src={payroll} alt='a document with bar graphs on it' />
          <Card.Body>
            <Card.Title>Payroll Portal</Card.Title>
            <Card.Text>This app creates users and generates printable reports</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>ReactJS, MongoDB, CSS, and Bootstrap</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src={marketing} alt='an opened envelope' />
          <Card.Body>
            <Card.Title>Marketing Website</Card.Title>
            <Card.Text>
              This app allows users to comment, and add items to a shopping cart action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>ReactJS, MongoDB, CSS, and Bootstrap</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}
