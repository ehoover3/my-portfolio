import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import { useSelector } from "react-redux"; // gets data from the store
import { useDispatch } from "react-redux"; // updates the store data
import { changeColor } from "../store/colorStore"; // updates the store data

export default function Projects() {
  // vanilla js section
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
  };

  const dispatch = useDispatch(); // send info (a.k.a. "state") to the store
  const color = useSelector((state) => state.colorStore.color); // get initial value from store

  // jsx section
  return (
    <div style={wrapperStyle}>
      <h2 style={{ color: color }} onClick={() => dispatch(changeColor())}>
        PROJECTS
      </h2>
      <CardGroup>
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
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
          <Card.Img variant='top' src='holder.js/100px160' />
          <Card.Body>
            <Card.Title>Payroll Portal</Card.Title>
            <Card.Text>This app creates users and generates printable reports</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>ReactJS, MongoDB, CSS, and Bootstrap</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='holder.js/100px160' />
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
