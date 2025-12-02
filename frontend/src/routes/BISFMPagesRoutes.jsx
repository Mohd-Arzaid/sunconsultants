import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import ServicesPageSkeleton from "@/components/ui/services-page-skeleton";

// Lazy load pages with default exports
const BISFM = lazy(() => import("../pages/BISFM/BISFM"));
const BISFMChinese = lazy(() => import("../pages/BISFM/BISFMChinese"));
const BISFMGerman = lazy(() => import("../pages/BISFM/BISFMGerman"));
const BISFMDutch = lazy(() => import("../pages/BISFM/BISFMDutch"));
const BISFMJapanese = lazy(() => import("../pages/BISFM/BISFMJapanese"));
const BISFMKorean = lazy(() => import("../pages/BISFM/BISFMKorean"));
const BISFMFrench = lazy(() => import("../pages/BISFM/BISFMFrench"));
const BISFMSpanish = lazy(() => import("../pages/BISFM/BISFMSpanish"));
const BISFMThai = lazy(() => import("../pages/BISFM/BISFMThai"));
const BISFMIndonesian = lazy(() => import("../pages/BISFM/BISFMIndonesian"));
const BISFMItalian = lazy(() => import("../pages/BISFM/BISFMItalian"));
const BISFMArabic = lazy(() => import("../pages/BISFM/BISFMArabic"));
const BISFMVietnamese = lazy(() => import("../pages/BISFM/BISFMVietnamese"));

export const BISFMPagesRoutes = () => {
  return (
    <>
      <Route
        path="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISFM />
          </Suspense>
        }
      />
      <Route
        path="/zh/wai-guo-sheng-chan-shang-yin-du-bis-ren-zheng-zhi-nan"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISFMChinese />
          </Suspense>
        }
      />
      <Route
        path="/de/leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISFMGerman />
          </Suspense>
        }
      />
      <Route
        path="/nl/gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISFMDutch />
          </Suspense>
        }
      />
      <Route
        path="/ja/bis-nintei-gaikoku-seizousha-no-tame-no-gaido-india-no-bis"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISFMJapanese />
          </Suspense>
        }
      />
      <Route
        path="/ko/indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISFMKorean />
          </Suspense>
        }
      />
      <Route
        path="/fr/guide-certification-bis-pour-fabricants-etrangers-bis-inde"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISFMFrench />
          </Suspense>
        }
      />
      <Route
        path="/es/guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISFMSpanish />
          </Suspense>
        }
      />
      <Route
        path="/th/khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISFMThai />
          </Suspense>
        }
      />
      <Route
        path="/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISFMIndonesian />
          </Suspense>
        }
      />
      <Route
        path="/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISFMItalian />
          </Suspense>
        }
      />
      <Route
        path="/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISFMArabic />
          </Suspense>
        }
      />
      <Route
        path="/vi/huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISFMVietnamese />
          </Suspense>
        }
      />
    </>
  );
};