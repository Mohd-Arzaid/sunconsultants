import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import BlogsSkeleton from "@/components/ui/blogs-skeleton";
import Indiano1FrontSection from "@/pages/INDIA-NO-1/Indiano1FrontSection";

const AllIndiafirstBISLicenseforRespiratoryProtectiveDevices = lazy(() =>
  import(
    "@/pages/INDIA-NO-1/AllIndiafirstBISLicenseforRespiratoryProtectiveDevices"
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
      <Route path="/all-india-first" element={<Indiano1FrontSection />} />
    </>
  );
};
