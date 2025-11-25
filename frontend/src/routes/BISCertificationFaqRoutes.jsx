import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import BlogsSkeleton from "@/components/ui/blogs-skeleton";

const CheckBISCertificationEng = lazy(() =>
  import("@/pages/BIS Certification Faq/CheckBISCertificationEng")
);
const Q2GetBISCertification = lazy(() =>
  import("@/pages/BIS Certification Faq/Q2GetBISCertification")
);
const Q3CheckBISCertificationOnline = lazy(() =>
  import("@/pages/BIS Certification Faq/Q3CheckBISCertificationOnline")
);
const Q4DoesBIScertificationCost = lazy(() =>
  import("@/pages/BIS Certification Faq/Q4DoesBIScertificationCost")
);
const Q5GetBISCertificationInIndia = lazy(() =>
  import("@/pages/BIS Certification Faq/Q5GetBISCertificationInIndia")
);

export const BISCertificationFaqRoutes = () => {
  return (
    <>
      <Route
        path="/check-bis-certification"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <CheckBISCertificationEng />
          </Suspense>
        }
      />
      
      <Route
        path="/get-bis-certification"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <Q2GetBISCertification />
          </Suspense>
        }
      />
      <Route
        path="/check-bis-certification-online"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <Q3CheckBISCertificationOnline />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-cost"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <Q4DoesBIScertificationCost />
          </Suspense>
        }
      />
      <Route
        path="/get-bis-certification-in-india"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <Q5GetBISCertificationInIndia />
          </Suspense>
        }
      />
    </>
  );
};

