import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import ServicesPageSkeleton from "@/components/ui/services-page-skeleton";

const ISIMark = lazy(() => import("../pages/ISIMark/ISIMark"));
const ISIMarkJapanese = lazy(() => import("../pages/ISIMark/ISIMarkJapanese"));
const ISIMarkKorean = lazy(() => import("../pages/ISIMark/ISIMarkKorean"));
const ISIMarkGerman = lazy(() => import("../pages/ISIMark/ISIMarkGerman"));
const ISIMarkSpanish = lazy(() => import("../pages/ISIMark/ISIMarkSpanish"));
const ISIMarkFrench = lazy(() => import("../pages/ISIMark/ISIMarkFrench"));
const ISIMarkIndonesian = lazy(() =>
  import("../pages/ISIMark/ISIMarkIndonesian")
);
const ISIMarkItalian = lazy(() => import("../pages/ISIMark/ISIMarkItalian"));
const ISIMarkDutch = lazy(() => import("../pages/ISIMark/ISIMarkDutch"));
const ISIMarkVietnamese = lazy(() =>
  import("../pages/ISIMark/ISIMarkVietnamese")
);
const ISIMarkArabic = lazy(() => import("../pages/ISIMark/ISIMarkArabic"));
const ISIMarkThai = lazy(() => import("../pages/ISIMark/ISIMarkThai"));
const ISIMarkChinese = lazy(() => import("@/pages/ISIMark/ISIMarkChinese"));

export const ISIMarkPagesRoutes = () => {
  return (
    <>
      {/* =========================== ISIMark routes (all languages) =========================== */}
      {/* ISIMark English Page */}
      <Route
        path="/a-guide-to-bis-certification-indian-bis"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <ISIMark />
          </Suspense>
        }
      />
      {/* ISIMark Japanese Page */}
      <Route
        path="/ja/bis-isi-mark-shounin"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <ISIMarkJapanese />
          </Suspense>
        }
      />
      {/* ISIMark Korean Page */}
      <Route
        path="/ko/bis-isi-mark-injeung"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <ISIMarkKorean />
          </Suspense>
        }
      />
      {/* ISIMark German Page */}
      <Route
        path="/de/bis-isi-mark-zertifizierung"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <ISIMarkGerman />
          </Suspense>
        }
      />
      {/* ISIMark Spanish Page */}
      <Route
        path="/es/certificacion-bis-marca-isi"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <ISIMarkSpanish />
          </Suspense>
        }
      />
      {/* ISIMark French Page */}
      <Route
        path="/fr/certification-bis-marque-isi"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <ISIMarkFrench />
          </Suspense>
        }
      />
      {/* ISIMark Indonesian Page */}
      <Route
        path="/id/sertifikasi-bis-isi-mark"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <ISIMarkIndonesian />
          </Suspense>
        }
      />
      {/* ISIMark Italian Page */}
      <Route
        path="/it/certificazione-bis-isi-mark"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <ISIMarkItalian />
          </Suspense>
        }
      />
      {/* ISIMark Dutch Page */}
      <Route
        path="/nl/bis-isi-mark-certificering"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <ISIMarkDutch />
          </Suspense>
        }
      />
      {/* ISIMark Vietnamese Page */}
      <Route
        path="/vi/chung-nhan-bis-isi-mark"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <ISIMarkVietnamese />
          </Suspense>
        }
      />
      {/* ISIMark Arabic Page */}
      <Route
        path="/ar/dalil-shahadat-bis-bis-alhind"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <ISIMarkArabic />
          </Suspense>
        }
      />
      {/* ISIMark Thai Page */}
      <Route
        path="/th/bis-isi-mark-raprong"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <ISIMarkThai />
          </Suspense>
        }
      />
      {/* ISIMark Chinese Page */}
      <Route
        path="/zh/bis-isi-mark-renzheng"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <ISIMarkChinese />
          </Suspense>
        }
      />
      {/* ========================= End ISIMark routes (all languages) ======================== */}
    </>
  );
};
