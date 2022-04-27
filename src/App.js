import { useState } from "react";
import "./App.css";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    if (theme === "dark") setTheme("primary");
    else if (theme === "primary") setTheme("success");
    else if (theme === "success") setTheme("danger");
    else if (theme === "danger") setTheme("dark");
  };

  return (
    <div>
      <NavigationBar theme={theme} handleTheme={handleTheme} />
      <Home />
      <About />
      <Projects />
      <ContactMe />
    </div>
  );
}
