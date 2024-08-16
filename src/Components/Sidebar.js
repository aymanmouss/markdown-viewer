import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import { LanguageContext } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

function Sidebar({ chapters }) {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();

  return (
    <nav className={`sidebar ${darkMode ? "dark-mode" : ""}`}>
      <h2>{t("chapters")}</h2>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link to={`/chapter/${chapter.id}`}>{chapter.title[language]}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
