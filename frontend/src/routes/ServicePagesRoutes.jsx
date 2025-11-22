import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import ServicesPageSkeleton from "@/components/ui/services-page-skeleton";

// Lazy load pages with default exports
const Peso = lazy(() => import("../pages/Peso"));
const Tec = lazy(() => import("../pages/Tec"));
const WPC = lazy(() => import("../pages/WPC"));
const ROHS = lazy(() => import("../pages/ROHS"));
const BatteryWaste = lazy(() => import("../pages/BatteryWaste"));
const BEE = lazy(() => import("../pages/BEE"));
const CECertification = lazy(() => import("../pages/CECertification"));
const EMIEMC = lazy(() => import("../pages/EMIEMC"));
const CBCertification = lazy(() => import("../pages/CBCertification"));
const LHSCable = lazy(() => import("../pages/LHSCable"));
const NABL = lazy(() => import("../pages/NABL"));
const CDSCO = lazy(() => import("../pages/CDSCO"));

// Lazy load components with named exports
const EPRService = lazy(() =>
  import("../components/manual/EPRService").then((module) => ({
    default: module.EPRService,
  }))
);
const LMPC = lazy(() =>
  import("../components/manual/LMPC").then((module) => ({
    default: module.LMPC,
  }))
);
const PlasticWaste = lazy(() =>
  import("../components/manual/PlasticWaste").then((module) => ({
    default: module.PlasticWaste,
  }))
);
const LegalMetrology = lazy(() =>
  import("../components/manual/LegalMetrology").then((module) => ({
    default: module.LegalMetrology,
  }))
);

export const ServicePagesRoutes = () => {
  return (
    <>
      <Route
        path="information-about-peso-certification-peso-license-india"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <Peso />
          </Suspense>
        }
      />
      <Route
        path="information-about-tec-certificate-mtcte"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <Tec />
          </Suspense>
        }
      />
      <Route
        path="information-about-wpc-certificate-eta-approval"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <WPC />
          </Suspense>
        }
      />
      <Route
        path="restriction-of-hazardous-substance-rohs-certificate"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <ROHS />
          </Suspense>
        }
      />
      <Route
        path="a-guide-on-how-to-obtain-epr-certificate"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <EPRService />
          </Suspense>
        }
      />
      <Route
        path="a-guide-on-how-to-obtain-lmpc-certificate"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <LMPC />
          </Suspense>
        }
      />
      <Route
        path="epr-certificate-for-plastic-waste-management-pwm"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <PlasticWaste />
          </Suspense>
        }
      />
      <Route
        path="what-is-legal-metrology-or-lmpc-certificate"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <LegalMetrology />
          </Suspense>
        }
      />
      <Route
        path="epr-certificate-for-battery-waste-management-bwm"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BatteryWaste />
          </Suspense>
        }
      />
      <Route
        path="bee-certification"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BEE />
          </Suspense>
        }
      />
      <Route
        path="ce-certification"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CECertification />
          </Suspense>
        }
      />
      <Route
        path="emi-emc-certification"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <EMIEMC />
          </Suspense>
        }
      />
      <Route
        path="cb-certification"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CBCertification />
          </Suspense>
        }
      />
      <Route
        path="lhscable"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <LHSCable />
          </Suspense>
        }
      />
      <Route
        path="nabl-certification-india"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <NABL />
          </Suspense>
        }
      />
      <Route
        path="cdsco-registration-certification"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CDSCO />
          </Suspense>
        }
      />
    </>
  );
};
