import React, { useState } from "react";
import AnimateLetters from "../components/AnimateLetters";
import EmailToast from "../components/EmailToast";

import { RiGithubLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import "../App.css";

export default function ContactMe(props) {
  // useState
  const [show, setShow] = useState(false);

  // functions
  const handleTheme = props.handleTheme;
  function handleToast() {
    setShow(!show);
  }

  // styles
  const theme = props.theme;

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "100px",
    marginLeft: "2.5vw",
    marginRight: "2.5vw",
  };

  const style = {
    position: "fixed",
    bottom: "50px",
    right: "50px",
    width: "100px",
    backgroundColor: "#ccd7f6",
  };

  return (
    <div style={wrapperStyle} id='contact'>
      <div style={{ marginTop: "65px" }}> </div>
      <AnimateLetters words='CONTACT ME' handleTheme={handleTheme} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <a
          href='https://www.linkedin.com/in/hoov/'
          style={{ textDecoration: "none", color: "black" }}
        >
          <TiSocialLinkedin
            style={{
              color: theme.style.primaryColor,
              fontSize: 125,
              borderRadius: 15,
              border: "10px solid " + theme.style.primaryColor,
              backgroundColor: theme.primaryColorLight,
              cursor: "pointer",
            }}
          />
          <div style={{ fontSize: "20px" }}>linkedin.com/in/hoov</div>
        </a>

        <a href='https://github.com/ehoover3' style={{ textDecoration: "none", color: "black" }}>
          <RiGithubLine
            style={{
              color: theme.style.primaryColor,
              fontSize: 125,
              borderRadius: 15,
              border: "10px solid " + theme.style.primaryColor,
              backgroundColor: theme.primaryColorLight,
              cursor: "pointer",
            }}
          />
          <div style={{ fontSize: "20px" }}>github.com/ehoover3</div>
        </a>

        <div style={{ textDecoration: "none", color: "black" }}>
          <AiOutlineMail
            style={{
              color: theme.style.primaryColor,
              fontSize: 125,
              borderRadius: 15,
              border: "10px solid " + theme.style.primaryColor,
              backgroundColor: theme.primaryColorLight,
              cursor: "pointer",
            }}
            onClick={() => {
              setShow(true);
              navigator.clipboard.writeText("ehoover3@yahoo.com");
            }}
          />
          <div style={{ fontSize: "20px" }}>ehoover3@yahoo.com</div>
          <EmailToast handleToast={handleToast} show={show} style={style} />
        </div>
      </div>
    </div>
  );
}
