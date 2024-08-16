import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import translations from "../translations.json";

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  const t = (key) => {
    return translations[language][key] || key;
  };

  return { t, language };
};
