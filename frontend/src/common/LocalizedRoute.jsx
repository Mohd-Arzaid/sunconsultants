import { useEffect } from "react";
import { useParams, Outlet, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getEnglishUrl,
  URL_MAPPINGS,
  isValidLocalizedUrl,
} from "@/utils/urlMapping";

const SUPPORTED_LANGUAGES = [
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

export function LocalizedRoute() {
  const { lang, "*": path } = useParams();
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

  // If no path is provided (e.g., /ja), show 404
  if (!path || path.trim() === "") {
    return <Navigate to="/404" replace />;
  }

  // Validate if the localized URL is valid for this language
  if (!isValidLocalizedUrl(path, lang)) {
    return <Navigate to="/404" replace />;
  }

  // Get the English URL from the localized path
  const englishUrl = getEnglishUrl(path, lang);

  // Additional validation: check if this is a valid URL mapping for the specific language
  const isValidUrl = URL_MAPPINGS[lang] && URL_MAPPINGS[lang][englishUrl];

  if (!isValidUrl) {
    // If it's not a valid localized URL, redirect to 404
    return <Navigate to="/404" replace />;
  }

  return <Outlet context={{ englishUrl, lang }} />;
}

export default LocalizedRoute;
