import { Route } from "react-router-dom";
import CRSRegistration from "../pages/CRSRegistration/CRSRegistration";
import CRSRegistrationJapanese from "../pages/CRSRegistration/CRSRegistrationJapanese";
import CRSRegistrationThai from "../pages/CRSRegistration/CRSRegistrationThai";
import CRSRegistrationKorean from "../pages/CRSRegistration/CRSRegistrationKorean";
import CRSRegistrationIndonesian from "../pages/CRSRegistration/CRSRegistrationIndonesian";
import CRSRegistrationSpanish from "../pages/CRSRegistration/CRSRegistrationSpanish";
import CRSRegistrationFrench from "../pages/CRSRegistration/CRSRegistrationFrench";
import CRSRegistrationItalian from "../pages/CRSRegistration/CRSRegistrationItalian";
import CRSRegistrationDutch from "../pages/CRSRegistration/CRSRegistrationDutch";
import CRSRegistrationGerman from "../pages/CRSRegistration/CRSRegistrationGerman";
import CRSRegistrationVietnamese from "../pages/CRSRegistration/CRSRegistrationVietnamese";
import CRSRegistrationArabic from "../pages/CRSRegistration/CRSRegistrationArabic";

export const CRSRegistrationRoutes = () => {
  return (
    <>
      {/* ============================== CRS routes (all languages) ============================== */}
      {/* English */}
      <Route
        path="what-is-crs-bis-or-crs-registration"
        element={<CRSRegistration />}
      />
      {/* Japanese */}
      <Route
        path="/ja/crs-bis-toha-nani-ka-crs-toroku"
        element={<CRSRegistrationJapanese />}
      />
      {/* Thai */}
      <Route
        path="/th/crs-bis-khue-a-rai-rab-phit-thab-crs"
        element={<CRSRegistrationThai />}
      />
      {/* Korean */}
      <Route
        path="/ko/crs-bis-i-mueos-inga-crs-deunglog"
        element={<CRSRegistrationKorean />}
      />
      {/* Indonesian */}
      <Route
        path="/id/apa-itu-crs-bis-atau-registrasi-crs"
        element={<CRSRegistrationIndonesian />}
      />
      {/* Spanish */}
      <Route
        path="/es/que-es-crs-bis-o-registro-crs"
        element={<CRSRegistrationSpanish />}
      />
      {/* French */}
      <Route
        path="/fr/quest-ce-que-le-crs-bis-ou-lenregistrement-crs"
        element={<CRSRegistrationFrench />}
      />
      {/* Italian */}
      <Route
        path="/it/cose-il-crs-bis-o-registrazione-crs"
        element={<CRSRegistrationItalian />}
      />
      {/* Dutch */}
      <Route
        path="/nl/wat-is-crs-bis-of-crs-registratie"
        element={<CRSRegistrationDutch />}
      />
      {/* German */}
      <Route
        path="/de/was-ist-crs-bis-oder-crs-registrierung"
        element={<CRSRegistrationGerman />}
      />
      {/* Vietnamese */}
      <Route
        path="/vi/crs-bis-la-gi-hoac-dang-ky-crs"
        element={<CRSRegistrationVietnamese />}
      />
      {/* Arabic */}
      <Route
        path="/ar/ma-huwa-crs-bis-aw-tasjeel-crs"
        element={<CRSRegistrationArabic />}
      />
      {/* ============================ End CRS routes (all languages) ============================ */}
    </>
  );
};
