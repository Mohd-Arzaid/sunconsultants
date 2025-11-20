import { Route } from "react-router-dom";
import BISCertification from "../pages/BISCertification/BISCertification";
import BISCertificationSpanish from "../pages/BISCertification/BISCertificationSpanish";
import BISCertificationGerman from "../pages/BISCertification/BISCertificationGerman";
import BISCertificationFrench from "../pages/BISCertification/BISCertificationFrench";
import BISCertificationIndonesian from "../pages/BISCertification/BISCertificationIndonesian";
import BISCertificationItalian from "../pages/BISCertification/BISCertificationItalian";
import BISCertificationJapanese from "../pages/BISCertification/BISCertificationJapanese";
import BISCertificationKorean from "../pages/BISCertification/BISCertificationKorean";
import BISCertificationDutch from "../pages/BISCertification/BISCertificationDutch";
import BISCertificationThai from "../pages/BISCertification/BISCertificationThai";
import BISCertificationVietnamese from "../pages/BISCertification/BISCertificationVietnamese";
import BISCertificationArabic from "../pages/BISCertification/BISCertificationArabic";
import BISCertificationChinese from "../pages/BISCertification/BISCertificationChinese";

export const BISCertificationPagesRoutes = () => {
  return (
    <>
      {/* BIS Certification English Page */}
      <Route
        path="what-is-bis-certificate-indian-bis"
        element={<BISCertification />}
      />
      {/* BIS Certification Spanish Page */}
      <Route
        path="/es/que-es-el-certificado-bis-bis-indio"
        element={<BISCertificationSpanish />}
      />
      {/* BIS Certification German Page */}
      <Route
        path="/de/was-ist-das-bis-zertifikat-indisches-bis"
        element={<BISCertificationGerman />}
      />
      {/* BIS Certification French Page */}
      <Route
        path="/fr/quest-ce-que-le-certificat-bis-indien"
        element={<BISCertificationFrench />}
      />
      {/* BIS Certification Indonesian Page */}
      <Route
        path="/id/apa-itu-sertifikat-bis-bis-india"
        element={<BISCertificationIndonesian />}
      />
      {/* BIS Certification Italian Page */}
      <Route
        path="/it/cose-il-certificato-bis-indiano"
        element={<BISCertificationItalian />}
      />
      {/* BIS Certification Japanese Page */}
      <Route
        path="/ja/bis-shomeisho-toha-nani-ka-indo-no-bis"
        element={<BISCertificationJapanese />}
      />
      {/* BIS Certification Korean Page */}
      <Route
        path="/ko/bis-jeungmyeongseo-ga-mueos-indo-bis"
        element={<BISCertificationKorean />}
      />
      {/* BIS Certification Dutch Page */}
      <Route
        path="/nl/wat-is-het-bis-certificaat-indiaas-bis"
        element={<BISCertificationDutch />}
      />
      {/* BIS Certification Thai Page */}
      <Route
        path="/th/bis-certificate-khue-a-rai-bis-india"
        element={<BISCertificationThai />}
      />
      {/* BIS Certification Vietnamese Page */}
      <Route
        path="/vi/chung-chi-bis-la-gi-bis-an-do"
        element={<BISCertificationVietnamese />}
      />
      {/* BIS Certification Arabic Page */}
      <Route
        path="/ar/ma-huwa-shahadat-bis-bis-alhind"
        element={<BISCertificationArabic />}
      />
      {/* BIS Certification Chinese Page */}
      <Route
        path="/zh/bis-zheng-shu-shi-shen-me-yin-du-bis"
        element={<BISCertificationChinese />}
      />
    </>
  );
};
