import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    supportedLngs: [
      "de", // German
      "en", // English
      "es", // Spanish
      "fr", // French
      "id", // Indonesian
      "it", // Italian
      "ja", // Japanese
      "ko", // Korean
      "nl", // Dutch
      "th", // Thai
      "vi", // Vietnamese
      // "ar", // arabic
    ],
    detection: {
      order: ["path"],
      lookupFromPathIndex: 0,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: [
      "BISFM",
      "BISCRSHero",
      "BISCRSIndex",
      "BISCRSContent",
      "ISIMark",
      "SchemeX",
      "BISCertification",
      "WhyChooseUs",
      "LatestBlog",
      "ClientTestimonial",
      "FreeCallBack",
      "BISFMServiceFaq",
      "AboutAuthor",
      "Services",
      "Footer",
    ],
    defaultNS: "BISFM",
  });

export default i18n;
