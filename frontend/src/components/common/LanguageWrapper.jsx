import { useEffect } from "react";
import { useParams, Outlet, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SUPPORTED_LANGUAGES = [
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
];

export function LanguageWrapper() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // If language is not supported, show 404
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    return <Navigate to="/404" replace />;
  }

  return <Outlet />;
}
