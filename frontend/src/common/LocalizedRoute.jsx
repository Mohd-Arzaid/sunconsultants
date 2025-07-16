import { useEffect } from "react";
import { useParams, Outlet, Navigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getEnglishUrl, URL_MAPPINGS } from "@/utils/urlMapping";
// import { getEnglishUrl, URL_MAPPINGS } from "../../utils/urlMapping";

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

export function LocalizedRoute({ children }) {
  const { lang, "*": path } = useParams();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // If language is not supported, show 404
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    return <Navigate to="/404" replace />;
  }

  // Get the English URL from the localized path
  const englishUrl = getEnglishUrl(path || "", lang);

  // For English, the URL should be the same as the path
  const finalEnglishUrl = lang === "en" ? path : englishUrl;

  // Check if this is a valid URL mapping
  const isValidUrl = URL_MAPPINGS[lang] && URL_MAPPINGS[lang][finalEnglishUrl];

  if (!isValidUrl && path) {
    // If it's not a valid localized URL, redirect to 404
    return <Navigate to="/404" replace />;
  }

  return <Outlet context={{ englishUrl: finalEnglishUrl, lang }} />;
}

export default LocalizedRoute;
