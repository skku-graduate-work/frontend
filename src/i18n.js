import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 번역 파일 import
import translationEN from "./locales/en/translation.json";
import translationKO from "./locales/ko/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ko: {
    translation: translationKO,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko", // 기본 언어 설정
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
