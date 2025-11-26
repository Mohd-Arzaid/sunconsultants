import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import ServicesPageSkeleton from "@/components/ui/services-page-skeleton";

// Lazy load pages with default exports
const BISFM = lazy(() => import("../pages/BISFM/BISFM"));
const BISFMChinese = lazy(() => import("../pages/BISFM/BISFMChinese"));
const BISFMGerman = lazy(() => import("../pages/BISFM/BISFMGerman"));
const BISFMDutch = lazy(() => import("../pages/BISFM/BISFMDutch"));
const BISFMJapanese = lazy(() => import("../pages/BISFM/BISFMJapanese"));

export const BISFMPagesRoutes = () => {
  return (
    <>
      <Route
        path="a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
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
    </>
  );
};
