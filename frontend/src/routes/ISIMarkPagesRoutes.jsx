import { Route } from "react-router-dom";
import ISIMark from "../pages/ISIMark/ISIMark";
import ISIMarkJapanese from "../pages/ISIMark/ISIMarkJapanese";
import ISIMarkKorean from "../pages/ISIMark/ISIMarkKorean";
import ISIMarkGerman from "../pages/ISIMark/ISIMarkGerman";
import ISIMarkSpanish from "../pages/ISIMark/ISIMarkSpanish";
import ISIMarkFrench from "../pages/ISIMark/ISIMarkFrench";
import ISIMarkIndonesian from "../pages/ISIMark/ISIMarkIndonesian";
import ISIMarkItalian from "../pages/ISIMark/ISIMarkItalian";
import ISIMarkDutch from "../pages/ISIMark/ISIMarkDutch";
import ISIMarkVietnamese from "../pages/ISIMark/ISIMarkVietnamese";
import ISIMarkArabic from "../pages/ISIMark/ISIMarkArabic";
import ISIMarkThai from "../pages/ISIMark/ISIMarkThai";
import ISIMarkChinese from "@/pages/ISIMark/ISIMarkChinese";

export const ISIMarkPagesRoutes = () => {
  return (
    <>
      {/* =========================== ISIMark routes (all languages) =========================== */}
      {/* ISIMark English Page */}
      <Route
        path="/a-guide-to-bis-certification-indian-bis"
        element={<ISIMark />}
      />
      {/* ISIMark Japanese Page */}
      <Route path="/ja/bis-isi-mark-shounin" element={<ISIMarkJapanese />} />
      {/* ISIMark Korean Page */}
      <Route path="/ko/bis-isi-mark-injeung" element={<ISIMarkKorean />} />
      {/* ISIMark German Page */}
      <Route
        path="/de/bis-isi-mark-zertifizierung"
        element={<ISIMarkGerman />}
      />
      {/* ISIMark Spanish Page */}
      <Route
        path="/es/certificacion-bis-marca-isi"
        element={<ISIMarkSpanish />}
      />
      {/* ISIMark French Page */}
      <Route
        path="/fr/certification-bis-marque-isi"
        element={<ISIMarkFrench />}
      />
      {/* ISIMark Indonesian Page */}
      <Route
        path="/id/sertifikasi-bis-isi-mark"
        element={<ISIMarkIndonesian />}
      />
      {/* ISIMark Italian Page */}
      <Route
        path="/it/certificazione-bis-isi-mark"
        element={<ISIMarkItalian />}
      />
      {/* ISIMark Dutch Page */}
      <Route path="/nl/bis-isi-mark-certificering" element={<ISIMarkDutch />} />
      {/* ISIMark Vietnamese Page */}
      <Route
        path="/vi/chung-nhan-bis-isi-mark"
        element={<ISIMarkVietnamese />}
      />
      {/* ISIMark Arabic Page */}
      <Route
        path="/ar/dalil-shahadat-bis-bis-alhind"
        element={<ISIMarkArabic />}
      />
      {/* ISIMark Thai Page */}
      <Route path="/th/bis-isi-mark-raprong" element={<ISIMarkThai />} />
      {/* ISIMark Chinese Page */}
      <Route path="/zh/bis-isi-mark-renzheng" element={<ISIMarkChinese />} />
      {/* ========================= End ISIMark routes (all languages) ======================== */}
    </>
  );
};
