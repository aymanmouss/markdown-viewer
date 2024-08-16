import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import MarkdownViewer from "./Components/MarkdownViewer";
import DarkModeToggle from "./Components/DarkModeToggle";
import LanguageToggle from "./Components/LanguageToggle";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./App.css";

export const ThemeContext = createContext(null);

const chapters = [
  {
    id: "java-oop-cheatsheet",
    title: {
      en: "Object-oriented programming",
      fr: "Programmation orientée objet",
    },
    file: {
      en: "java-oop-cheatsheet-en.md",
      fr: "java-oop-cheatsheet-fr.md",
    },
  },
  {
    id: "Java-Arrays-Collections",
    title: {
      en: "Arrays & Collections",
      fr: "Les Tableaux et les Collections",
    },
    file: {
      en: "java-arrays-collections-en.md",
      fr: "java-arrays-collections-fr.md",
    },
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <LanguageProvider>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Router>
          <div className={`app ${darkMode ? "dark-mode" : ""}`}>
            <div className='sidebar-trigger'></div>
            <Sidebar chapters={chapters} />
            <div className='main-container'>
              <div className='toggle-container'>
                <DarkModeToggle />
                <LanguageToggle />
              </div>
              <main className='content'>
                <Routes>
                  <Route
                    path='/'
                    element={
                      <h1>Welcome! Select a chapter from the sidebar.</h1>
                    }
                  />
                  <Route
                    path='/chapter/:chapterId'
                    element={<MarkdownViewer chapters={chapters} />}
                  />
                </Routes>
              </main>
            </div>
          </div>
        </Router>
      </ThemeContext.Provider>
    </LanguageProvider>
  );
}

export default App;
