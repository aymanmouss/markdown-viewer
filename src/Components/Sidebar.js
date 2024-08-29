import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import { LanguageContext } from "../contexts/LanguageContext";

function Sidebar({ course, courseId }) {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <nav className={`sidebar ${darkMode ? "dark-mode" : ""}`}>
      <h2>{course.name[language]}</h2>
      <ul>
        {course.chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link to={`/course/${courseId}/${chapter.id}`}>
              {chapter.title[language]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
