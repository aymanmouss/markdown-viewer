import React, { useContext } from "react";
import { ThemeContext } from "../App";

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleDarkMode} className='dark-mode-toggle'>
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default DarkModeToggle;
