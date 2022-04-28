import React from "react";
import { FaUserAstronaut } from "react-icons/fa";
import AnimateLetters from "../components/AnimateLetters.js";
import Button from "react-bootstrap/Button";

export default function Home(props) {
  const theme = props.theme;
  const handleTheme = props.handleTheme;
  const titleStyle = {
    fontSize: "100px",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    // textDecoration: "underline",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "1px solid black",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <div>
        <div style={{ fontSize: "50px" }}>Hello, my name is</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaUserAstronaut style={{ fontSize: "200px", color: theme.style.primaryColor }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <AnimateLetters words='ERIC' handleTheme={handleTheme} titleStyle={titleStyle} />
            <AnimateLetters words='HOOVER' handleTheme={handleTheme} titleStyle={titleStyle} />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ fontSize: "50px" }}>Software Engineer</div>
          <Button
            variant={theme.style.bootstrap}
            type='submit'
            style={{ margin: "10px", height: "50px" }}
          >
            Download Resumé
          </Button>
        </div>
      </div>
    </div>
  );
}
