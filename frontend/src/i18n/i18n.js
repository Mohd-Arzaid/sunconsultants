import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    supportedLngs: [
      "en",
      "it",
      "fr",
      "de",
      "nl",
      "ja",
      "th",
      "ko",
      "id",
      "vi",
      "es",
    ],
    detection: {
      order: ["path"],
      lookupFromPathIndex: 0,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["BISFM"],
    defaultNS: "BISFM",
  });

export default i18n;
