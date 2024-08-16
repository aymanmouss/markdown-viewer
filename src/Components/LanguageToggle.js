import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function LanguageToggle() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button onClick={toggleLanguage} className='language-toggle'>
      {language === "en" ? "FR" : "EN"}
    </button>
  );
}

export default LanguageToggle;
