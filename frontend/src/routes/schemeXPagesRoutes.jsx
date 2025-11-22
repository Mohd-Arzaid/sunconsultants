import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import ServicesPageSkeleton from "@/components/ui/services-page-skeleton";

const SchemeX = lazy(() => import("../pages/SchemeX/SchemeX"));
const SchemeXJapanese = lazy(() => import("../pages/SchemeX/SchemeXJapanese"));
const SchemeXGerman = lazy(() => import("../pages/SchemeX/SchemeXGerman"));
const SchemeXSpanish = lazy(() => import("../pages/SchemeX/SchemeXSpanish"));
const SchemeXFrench = lazy(() => import("../pages/SchemeX/SchemeXFrench"));
const SchemeXIndonesian = lazy(() =>
  import("../pages/SchemeX/SchemeXIndonesian")
);
const SchemeXVietnamese = lazy(() =>
  import("../pages/SchemeX/SchemeXVietnamese")
);
const SchemeXItalian = lazy(() => import("../pages/SchemeX/SchemeXItalian"));
const SchemeXKorean = lazy(() => import("../pages/SchemeX/SchemeXKorean"));
const SchemeXDutch = lazy(() => import("../pages/SchemeX/SchemeXDutch"));
const SchemeXArabic = lazy(() => import("../pages/SchemeX/SchemeXArabic"));
const SchemeXThai = lazy(() => import("../pages/SchemeX/SchemeXThai"));
const SchemeXChinese = lazy(() => import("../pages/SchemeX/SchemeXChainese"));

export const SchemeXPagesRoutes = () => {
  return (
    <>
      {/* Scheme X Eng Page */}
      <Route
        path="/indian-bis-certification-under-scheme-x"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <SchemeX />
          </Suspense>
        }
      />
      {/* Scheme X Japanese Page */}
      <Route
        path="/ja/indo-no-bis-nintei-sukimu-x"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <SchemeXJapanese />
          </Suspense>
        }
      />
      {/* Scheme X German Page */}
      <Route
        path="/de/indische-bis-zertifizierung-nach-schema-x"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <SchemeXGerman />
          </Suspense>
        }
      />
      {/* Scheme X Spanish Page */}
      <Route
        path="/es/certificacion-bis-india-bajo-esquema-x"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <SchemeXSpanish />
          </Suspense>
        }
      />
      {/* Scheme X France Page */}
      <Route
        path="/fr/certification-bis-indienne-selon-schema-x"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <SchemeXFrench />
          </Suspense>
        }
      />
      {/* Scheme X Indonesian Page */}
      <Route
        path="/id/sertifikasi-bis-india-di-bawah-skema-x"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <SchemeXIndonesian />
          </Suspense>
        }
      />
      {/* Scheme X Vietnamese Page */}
      <Route
        path="/vi/chung-nhan-bis-an-do-theo-scheme-x"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <SchemeXVietnamese />
          </Suspense>
        }
      />
      {/* Scheme X Italian Page */}
      <Route
        path="/it/certificazione-bis-indiana-secondo-schema-x"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <SchemeXItalian />
          </Suspense>
        }
      />
      {/* Scheme X Korean Page */}
      <Route
        path="/ko/indo-bis-injeung-scheme-x-haenghaeng"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <SchemeXKorean />
          </Suspense>
        }
      />
      {/* Scheme X Dutch Page */}
      <Route
        path="/nl/indiaas-bis-certificaat-volgens-schema-x"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <SchemeXDutch />
          </Suspense>
        }
      />
      {/* Scheme X Arabic Page */}
      <Route
        path="/ar/shahadat-bis-alhind-tahata-almukhatat-x"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <SchemeXArabic />
          </Suspense>
        }
      />
      {/* Scheme X Thai Page */}
      <Route
        path="/th/bis-prathiap-india-taem-dai-tae-skema-x"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <SchemeXThai />
          </Suspense>
        }
      />
      {/* Scheme X Chinese Page */}
      <Route
        path="/zh/yin-du-bis-fang-an-x-ren-zheng"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <SchemeXChinese />
          </Suspense>
        }
      />
    </>
  );
};
