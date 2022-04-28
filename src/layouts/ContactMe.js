import React from "react";
import AnimateLetters from "../components/AnimateLetters";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactMe(props) {
  const theme = props.theme;
  const handleTheme = props.handleTheme;

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "100px",
    marginLeft: "2.5vw",
    marginRight: "2.5vw",
  };

  return (
    <div style={wrapperStyle} id='contact'>
      <div style={{ marginTop: "65px" }}> </div>
      <AnimateLetters words='CONTACT ME' handleTheme={handleTheme} />

      <Form>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Control
            type='name'
            placeholder='Name'
            style={{ backgroundColor: theme.style.primaryColor, color: "white" }}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            type='email'
            placeholder='Email'
            style={{ backgroundColor: theme.style.primaryColor, color: "white" }}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicSubject'>
          <Form.Control
            type='subject'
            placeholder='Subject'
            style={{ backgroundColor: theme.style.primaryColor, color: "white" }}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicMessage'>
          <Form.Control
            type='message'
            placeholder='Message'
            style={{ backgroundColor: theme.style.primaryColor, color: "white" }}
          />
        </Form.Group>

        <Button variant={theme.style.bootstrap} type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}
