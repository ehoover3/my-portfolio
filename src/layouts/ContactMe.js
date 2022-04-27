import React from "react";
import AnimateLetters from "../components/AnimateLetters";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactMe(props) {
  const handleTheme = props.handleTheme;

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginTop: "100px",
    marginBottom: "100px",
  };

  return (
    <div style={wrapperStyle} id='contact'>
      <div style={{ marginTop: "65px" }}> </div>
      <AnimateLetters words='CONTACT ME' handleTheme={handleTheme} />

      <Form>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Control type='name' placeholder='Name' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control type='email' placeholder='Email' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicSubject'>
          <Form.Control type='subject' placeholder='Subject' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicMessage'>
          <Form.Control type='message' placeholder='Message' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}
