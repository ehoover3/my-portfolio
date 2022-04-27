import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <Card>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>Eric Hoover</Card.Title>
        <Card.Text>Full Stack Developer</Card.Text>
        <Button variant='primary'>Hire Me Today</Button>
      </Card.Body>
    </Card>
  );
}
