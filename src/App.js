import { useState } from "react";
import "./App.css";

import NavigationBar from "./layouts/NavigationBar";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Projects from "./layouts/Projects";
import ContactMe from "./layouts/ContactMe";

export default function App() {
  const [theme, setTheme] = useState({
    class: "accordionColorsSuccess",
    style: {
      bootstrap: "success",
      primaryColor: "#1a8654",
      primaryFont: "white",
      backgroundColor: "#F5E0B7",
    },
  });

  const handleTheme = () => {
    if (theme.style.bootstrap === "dark")
      setTheme({
        class: "accordionColorsPrimary",
        style: {
          bootstrap: "primary",
          primaryColor: "#0c6dfd",
          primaryFont: "white",
          backgroundColor: "#92DCE5",
        },
      });
    else if (theme.style.bootstrap === "primary")
      setTheme({
        class: "accordionColorsSuccess",
        style: {
          bootstrap: "success",
          primaryColor: "#1a8654",
          primaryFont: "white",
          backgroundColor: "#F5E0B7",
        },
      });
    else if (theme.style.bootstrap === "success")
      setTheme({
        class: "accordionColorsDark",
        style: {
          bootstrap: "dark",
          primaryColor: "#212529",
          primaryFont: "white",
          backgroundColor: "#F2DC5D",
        },
      });
  };

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
