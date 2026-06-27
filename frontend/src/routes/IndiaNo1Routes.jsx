import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import BlogsSkeleton from "@/components/ui/blogs-skeleton";
import Indiano1FrontSection from "@/pages/INDIA-NO-1/Indiano1FrontSection";

const AllIndiafirstBISLicenseforRespiratoryProtectiveDevices = lazy(() =>
  import(
    "@/pages/INDIA-NO-1/AllIndiafirstBISLicenseforRespiratoryProtectiveDevices"
  )
);

const AllIndiafirstBISLicenseforForgedSteel = lazy(() =>
  import("@/pages/INDIA-NO-1/AllIndiafirstBISLicenseforForgedSteel")
);

const AllIndiaFirstBISLicenseforPolyesterFibreFilledPillow = lazy(() =>
  import(
    "@/pages/INDIA-NO-1/AllIndiaFirstBISLicenseforPolyesterFibreFilledPillow"
  )
);

const AllIndiaFirstBISLicenseforRubberHotWaterBottlesunder = lazy(() =>
  import(
    "@/pages/INDIA-NO-1/AllIndiaFirstBISLicenseforRubberHotWaterBottlesunder"
  )
);

const AllIndiaFirstBISLicenseforRigidPVCSheetsunder = lazy(() =>
  import("@/pages/INDIA-NO-1/AllIndiaFirstBISLicenseforRigidPVCSheetsunder")
);

const AllIndiaFirstBISLicenseforCylinderCartridgesforLocks = lazy(() =>
  import(
    "@/pages/INDIA-NO-1/AllIndiaFirstBISLicenseforCylinderCartridgesforLocks"
  )
);

const AllIndiaFirstBISLicenseforCarbonBlack = lazy(() =>
  import("@/pages/INDIA-NO-1/AllIndiaFirstBISLicenseforCarbonBlack")
);

export const IndiaNo1Routes = () => {
  return (
    <>
      <Route
        path="/all-india-first/bis-license-for-respiratory-protective-devices-is-19089-2025"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <AllIndiafirstBISLicenseforRespiratoryProtectiveDevices />
          </Suspense>
        }
      />
      <Route
        path="/all-india-first/bis-license-for-forged-steel-socket-welding-fittings-is-4712-1984"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <AllIndiafirstBISLicenseforForgedSteel />
          </Suspense>
        }
      />
      <Route
        path="/all-india-first/bis-license-for-polyester-fibre-filled-pillow-is-18930-2024"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <AllIndiaFirstBISLicenseforPolyesterFibreFilledPillow />
          </Suspense>
        }
      />
      <Route
        path="/all-india-first/bis-license-for-rubber-hot-water-bottles-is-1867-2023"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <AllIndiaFirstBISLicenseforRubberHotWaterBottlesunder />
          </Suspense>
        }
      />
      <Route
        path="/all-india-first/bis-license-for-rigid-pvc-sheet-is-6307-2023"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <AllIndiaFirstBISLicenseforRigidPVCSheetsunder />
          </Suspense>
        }
      />
      <Route
        path="/all-india-first/bis-license-for-cylinder-cartridges-for-locks-is-18841"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <AllIndiaFirstBISLicenseforCylinderCartridgesforLocks />
          </Suspense>
        }
      />
      <Route
        path="/all-india-first/bis-license-carbon-black-17440-2020"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <AllIndiaFirstBISLicenseforCarbonBlack />
          </Suspense>
        }
      />
      <Route path="/all-india-first" element={<Indiano1FrontSection />} />
    </>
  );
};
