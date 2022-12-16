import React, { useState, useEffect } from "react";
import "./theme.css";
import { Search } from "./searchBox";

export function Container() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
            <button className="theme" onClick={toggleTheme}>Toggle Theme</button>
      <Search />
          
    </div>
  );
}
export default Container;
