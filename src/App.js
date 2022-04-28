import { useState, useEffect } from "react";
import "./App.css";

import NavigationBar from "./layouts/NavigationBar";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Projects from "./layouts/Projects";
import ContactMe from "./layouts/ContactMe";

export default function App() {
  const [theme, setTheme] = useState({
    class: "accordionColorsSuccess",
    primaryColorLight: "rgb(26,134,84,0.25)",
    primaryColorLight_Card: "rgb(26,134,84,0)",
    style: {
      bootstrap: "success",
      primaryColor: "rgb(26,134,84)",
      primaryFont: "white",
      backgroundColor: "rgb(245,224,183)",
    },
  });

  const handleTheme = () => {
    if (theme.style.bootstrap === "dark")
      setTheme({
        class: "accordionColorsPrimary",
        primaryColorLight: "rgb(12,109,253,0.25)",
        primaryColorLight_Card: "rgb(12,109,253,0)",
        style: {
          bootstrap: "primary",
          primaryColor: "rgb(12,109,253)",
          primaryFont: "white",
          backgroundColor: "rgb(146,220,229)",
        },
      });
    else if (theme.style.bootstrap === "primary")
      setTheme({
        class: "accordionColorsSuccess",
        primaryColorLight: "rgb(26,134,84,0.25)",
        primaryColorLight_Card: "rgb(26,134,84,0)",
        style: {
          bootstrap: "success",
          primaryColor: "rgb(26,134,84)",
          primaryFont: "white",
          backgroundColor: "rgb(245,224,183)",
        },
      });
    else if (theme.style.bootstrap === "success")
      setTheme({
        class: "accordionColorsDark",
        primaryColorLight: "rgb(33,37,41,0.25)",
        primaryColorLight_Card: "rgb(33,37,41,0)",
        style: {
          bootstrap: "dark",
          primaryColor: "rgb(33,37,41)",
          primaryFont: "white",
          backgroundColor: "rgb(242,220,93)",
        },
      });
  };

  useEffect(() => {
    // Update the document title using the browser API
    document.body.style.backgroundColor = theme.style.backgroundColor;
  });

  return (
    <div style={{ backgroundColor: theme.style.backgroundColor }}>
      <NavigationBar theme={theme} />
      <Home theme={theme} handleTheme={handleTheme} />
      <About theme={theme} handleTheme={handleTheme} />
      <Projects theme={theme} handleTheme={handleTheme} />
      <ContactMe theme={theme} handleTheme={handleTheme} />
    </div>
  );
}
