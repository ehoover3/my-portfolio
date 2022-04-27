import React from "react";
// import { FaUserAstronaut } from "react-icons/fa";
import AnimateLetters from "../components/AnimateLetters.js";

export default function Home(props) {
  const handleTheme = props.handleTheme;

  return (
    <div>
      {/* <FaUserAstronaut /> */}
      <AnimateLetters words='ERIC HOOVER' handleTheme={handleTheme} />
    </div>
  );
}
