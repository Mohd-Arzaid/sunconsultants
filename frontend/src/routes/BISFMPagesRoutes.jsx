import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import ServicesPageSkeleton from "@/components/ui/services-page-skeleton";

// Lazy load pages with default exports
const BISFM = lazy(() => import("../pages/BISFM/BISFM"));
const BISFMChinese = lazy(() => import("../pages/BISFM/BISFMChinese"));
const BISFMGerman = lazy(() => import("../pages/BISFM/BISMGerman"));

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
    </>
  );
};
