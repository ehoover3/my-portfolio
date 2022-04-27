import { useState } from "react";
import "./App.css";

import NavigationBar from "./layouts/NavigationBar";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Projects from "./layouts/Projects";
import ContactMe from "./layouts/ContactMe";

export default function App() {
  const [theme, setTheme] = useState({ bootstrap: "dark", backgroundColor: "#C9A5D5" });

  const handleTheme = () => {
    if (theme.bootstrap === "dark") setTheme({ bootstrap: "primary", backgroundColor: "#FAF0CA" });
    else if (theme.bootstrap === "primary")
      setTheme({ bootstrap: "success", backgroundColor: "#C9DAEA" });
    else if (theme.bootstrap === "success")
      setTheme({ bootstrap: "dark", backgroundColor: "#F2DC5D" });
  };

  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
      <NavigationBar theme={theme} />
      <Home handleTheme={handleTheme} />
      <About handleTheme={handleTheme} />
      <Projects handleTheme={handleTheme} />
      <ContactMe handleTheme={handleTheme} />
    </div>
  );
}
