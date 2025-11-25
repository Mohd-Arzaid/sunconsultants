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
const Q6ApplyBISCertification = lazy(() =>
  import("@/pages/BIS Certification Faq/Q6ApplyBISCertification")
);
const Q7HowToVerifyBISCertification = lazy(() =>
  import("@/pages/BIS Certification Faq/Q7HowToVerifyBISCertification")
);
const Q8DownloadBISCertificateOnline = lazy(() =>
  import("@/pages/BIS Certification Faq/Q8DownloadBISCertificateOnline")
);
const Q9ImportWithoutBISCertificate = lazy(() =>
  import("@/pages/BIS Certification Faq/Q9ImportWithoutBISCertificate")
);
const Q10ApplyForBISCertificateInIndia = lazy(() =>
  import("@/pages/BIS Certification Faq/Q10ApplyForBISCertificateInIndia")
);
const Q11IssueBISCertificate = lazy(() =>
  import("@/pages/BIS Certification Faq/Q11IssueBISCertificate")
);
const Q12GetBISCertificate = lazy(() =>
  import("@/pages/BIS Certification Faq/Q12GetBISCertificate")
);
const Q13TraderGetBISCertificate = lazy(() =>
  import("@/pages/BIS Certification Faq/Q13TraderGetBISCertificate")
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
      <Route
        path="/apply-bis-certification"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <Q6ApplyBISCertification />
          </Suspense>
        }
      />
      <Route
        path="/verify-bis-certification"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <Q7HowToVerifyBISCertification />
          </Suspense>
        }
      />
      <Route
        path="/download-bis-certificate-online"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <Q8DownloadBISCertificateOnline />
          </Suspense>
        }
      />
      <Route
        path="/import-without-bis-certificate"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <Q9ImportWithoutBISCertificate />
          </Suspense>
        }
      />
      <Route
        path="/importer-apply-for-bis-certificate-in-india"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <Q10ApplyForBISCertificateInIndia />
          </Suspense>
        }
      />
      <Route
        path="/issue-bis-certificate"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <Q11IssueBISCertificate />
          </Suspense>
        }
      />
      <Route
        path="/get-bis-certificate"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <Q12GetBISCertificate />
          </Suspense>
        }
      />
      <Route
        path="/trader-get-bis-certificate"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <Q13TraderGetBISCertificate />
          </Suspense>
        }
      />
    </>
  );
};

