import { useTranslation } from "react-i18next";
const useTranslationCustom = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "vi") => {
    i18n.changeLanguage(lng);
  };
  return { t, changeLanguage };
};
export { useTranslationCustom };
