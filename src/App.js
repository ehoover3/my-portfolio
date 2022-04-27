import { useState } from "react";
import "./App.css";

import NavigationBar from "./layouts/NavigationBar";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Projects from "./layouts/Projects";
import ContactMe from "./layouts/ContactMe";

export default function App() {
  const [theme, setTheme] = useState({
    bootstrap: "dark",
    primaryColor: "#212529",
    primaryFont: "white",
    backgroundColor: "#C9A5D5",
  });

  const handleTheme = () => {
    if (theme.bootstrap === "dark")
      setTheme({
        bootstrap: "primary",
        primaryColor: "#0c6dfd",
        primaryFont: "white",
        backgroundColor: "#92DCE5",
      });
    else if (theme.bootstrap === "primary")
      setTheme({
        bootstrap: "success",
        primaryColor: "#1a8654",
        primaryFont: "white",
        backgroundColor: "#F5E0B7",
      });
    else if (theme.bootstrap === "success")
      setTheme({
        bootstrap: "dark",
        primaryColor: "#212529",
        primaryFont: "white",
        backgroundColor: "#F2DC5D",
      });
  };

  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
      <NavigationBar theme={theme} />
      <Home theme={theme} handleTheme={handleTheme} />
      <About handleTheme={handleTheme} />
      <Projects handleTheme={handleTheme} />
      <ContactMe handleTheme={handleTheme} />
    </div>
  );
}
