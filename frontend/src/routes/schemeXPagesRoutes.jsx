import { Route } from "react-router-dom";
import SchemeX from "../pages/SchemeX/SchemeX";
import SchemeXJapanese from "../pages/SchemeX/SchemeXJapanese";
import SchemeXGerman from "../pages/SchemeX/SchemeXGerman";
import SchemeXSpanish from "../pages/SchemeX/SchemeXSpanish";
import SchemeXFrench from "../pages/SchemeX/SchemeXFrench";
import SchemeXIndonesian from "../pages/SchemeX/SchemeXIndonesian";
import SchemeXVietnamese from "../pages/SchemeX/SchemeXVietnamese";
import SchemeXItalian from "../pages/SchemeX/SchemeXItalian";
import SchemeXKorean from "../pages/SchemeX/SchemeXKorean";
import SchemeXDutch from "../pages/SchemeX/SchemeXDutch";
import SchemeXArabic from "../pages/SchemeX/SchemeXArabic";
import SchemeXThai from "../pages/SchemeX/SchemeXThai";
import SchemeXChinese from "../pages/SchemeX/SchemeXChainese";

export const SchemeXPagesRoutes = () => {
  return (
    <>
      {/* Scheme X Eng Page */}
      <Route
        path="/indian-bis-certification-under-scheme-x"
        element={<SchemeX />}
      />
      {/* Scheme X Japanese Page */}
      <Route
        path="/ja/indo-no-bis-nintei-sukimu-x"
        element={<SchemeXJapanese />}
      />
      {/* Scheme X German Page */}
      <Route
        path="/de/indische-bis-zertifizierung-nach-schema-x"
        element={<SchemeXGerman />}
      />
      {/* Scheme X Spanish Page */}
      <Route
        path="/es/certificacion-bis-india-bajo-esquema-x"
        element={<SchemeXSpanish />}
      />
      {/* Scheme X France Page */}
      <Route
        path="/fr/certification-bis-indienne-selon-schema-x"
        element={<SchemeXFrench />}
      />
      {/* Scheme X Indonesian Page */}
      <Route
        path="/id/sertifikasi-bis-india-di-bawah-skema-x"
        element={<SchemeXIndonesian />}
      />
      {/* Scheme X Vietnamese Page */}
      <Route
        path="/vi/chung-nhan-bis-an-do-theo-scheme-x"
        element={<SchemeXVietnamese />}
      />
      {/* Scheme X Italian Page */}
      <Route
        path="/it/certificazione-bis-indiana-secondo-schema-x"
        element={<SchemeXItalian />}
      />
      {/* Scheme X Korean Page */}
      <Route
        path="/ko/indo-bis-injeung-scheme-x-haenghaeng"
        element={<SchemeXKorean />}
      />
      {/* Scheme X Dutch Page */}
      <Route
        path="/nl/indiaas-bis-certificaat-volgens-schema-x"
        element={<SchemeXDutch />}
      />
      {/* Scheme X Arabic Page */}
      <Route
        path="/ar/shahadat-bis-alhind-tahata-almukhatat-x"
        element={<SchemeXArabic />}
      />
      {/* Scheme X Thai Page */}
      <Route
        path="/th/bis-prathiap-india-taem-dai-tae-skema-x"
        element={<SchemeXThai />}
      />
      {/* Scheme X Chinese Page */}
      <Route
        path="/zh/yin-du-bis-fang-an-x-ren-zheng"
        element={<SchemeXChinese />}
      />
    </>
  );
};
