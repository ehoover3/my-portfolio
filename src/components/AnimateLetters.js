import React from "react";

export default function AnimateLetters(props) {
  let { words } = props;

  let handleTheme = props.handleTheme;

  let wordsArray = words.split("").map((letter, index) => {
    {
      return letter === " " ? (
        <span key={index} className='letter' style={{ width: "15px" }}></span>
      ) : (
        <span key={index} className='letter'>
          {letter}
        </span>
      );
    }
  });

  //   JSX SECTION
  return (
    <h2 style={{ display: "flex", justifyContent: "center" }} onClick={handleTheme}>
      {wordsArray}
    </h2>
  );
}
