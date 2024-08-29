import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import MarkdownViewer from "./Components/MarkdownViewer";
import DarkModeToggle from "./Components/DarkModeToggle";
import LanguageToggle from "./Components/LanguageToggle";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./App.css";
import courses from "./Components/Courses";

export const ThemeContext = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <LanguageProvider>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Router>
          <div className={`app ${darkMode ? "dark-mode" : ""}`}>
            <div className='sidebar-trigger'></div>
            {selectedCourse && (
              <Sidebar
                course={courses[selectedCourse]}
                courseId={selectedCourse}
              />
            )}
            <div
              className={`main-container ${
                !selectedCourse ? "course-selection-page" : ""
              }`}
            >
              <div className='toggle-container'>
                <DarkModeToggle />
                <LanguageToggle />
              </div>
              <main className='content'>
                <Routes>
                  <Route
                    path='/'
                    element={
                      <div>
                        <div className='welcome-message'>
                          <h1>Welcome to our Learning Platform!</h1>
                          <p>
                            Select a course from the options below to begin your
                            learning journey.
                          </p>
                        </div>
                        <div className='course-selection'>
                          {Object.entries(courses).map(([courseId, course]) => (
                            <Link
                              key={courseId}
                              to={`/course/${courseId}`}
                              onClick={() => setSelectedCourse(courseId)}
                              className='course-button'
                            >
                              {course.name.en}
                            </Link>
                          ))}
                        </div>
                      </div>
                    }
                  />
                  <Route
                    path='/course/:courseId'
                    element={
                      selectedCourse ? (
                        <h2>Select a chapter from the sidebar.</h2>
                      ) : (
                        <h2>Please select a course first.</h2>
                      )
                    }
                  />
                  <Route
                    path='/course/:courseId/:chapterId'
                    element={<MarkdownViewer courses={courses} />}
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
