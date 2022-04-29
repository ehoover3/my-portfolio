import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function NavigationBar(props) {
  let theme = props.theme;

  return (
    <Navbar bg={theme.style.bootstrap} variant='dark' sticky='top'>
      <Container>
        <Navbar.Brand href='#home'>ERIC HOOVER</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#projects'>PROJECTS</Nav.Link>
          <Nav.Link href='#about'>ABOUT</Nav.Link>
          <Nav.Link href='#contact'>CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
