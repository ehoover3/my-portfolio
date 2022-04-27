import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function NavigationBar(props) {
  let theme = props.theme;
  const handleTheme = props.handleTheme;

  return (
    <Navbar bg={theme} variant='dark'>
      <Container onClick={handleTheme}>
        <Navbar.Brand href='#home'>ERIC HOOVER</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>About</Nav.Link>
          <Nav.Link href='#features'>Projects</Nav.Link>
          <Nav.Link href='#pricing'>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
