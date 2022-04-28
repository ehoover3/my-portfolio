import React from "react";

export default function AnimateLetters(props) {
  let { words, titleStyle } = props;

  let handleTheme = props.handleTheme;

  let wordsArray = words.split("").map((letter, index) => {
    {
      return letter === " " ? (
        <span key={index} className='letter' style={{ width: "10px" }}></span>
      ) : (
        <span key={index} className='letter'>
          {letter}
        </span>
      );
    }
  });

  //   JSX SECTION

  if (titleStyle)
    return (
      <h2 style={titleStyle} onClick={handleTheme}>
        {wordsArray}
      </h2>
    );
  else
    return (
      <h2
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={handleTheme}
      >
        {wordsArray}
      </h2>
    );
}
