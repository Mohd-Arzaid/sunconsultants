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
      <Route path="/all-india-first" element={<Indiano1FrontSection />} />
    </>
  );
};
