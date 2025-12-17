import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import FaqMainPageSkeleton from "@/components/ui/faq-main-page-skeleton";
import FaqPageSkeleton from "@/components/ui/faq-page-skeleton";

// Lazy load Faqs component
const Faqs = lazy(() => import("@/pages/Faqs"));

// BIS Certification FAQ Components
const Q1CheckBISCertificationEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q1CheckBISCertificationEng")
);
const Q2GetBISCertificationEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q2GetBISCertificationEng")
);
const Q3CheckBISCertificationOnlineEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q3CheckBISCertificationOnlineEng")
);
const Q4DoesBIScertificationCostEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q4DoesBIScertificationCostEng")
);
const Q5GetBISCertificationInIndiaEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q5GetBISCertificationInIndiaEng")
);
const Q6ApplyBISCertificationEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q6ApplyBISCertificationEng")
);
const Q7HowToVerifyBISCertificationEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q7HowToVerifyBISCertificationEng")
);
const Q8DownloadBISCertificateOnlineEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q8DownloadBISCertificateOnlineEng")
);
const Q9ImportWithoutBISCertificateEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q9ImportWithoutBISCertificateEng")
);
const Q10ApplyForBISCertificateInIndiaEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q10ApplyForBISCertificateInIndiaEng")
);
const Q11IssueBISCertificateEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q11IssueBISCertificateEng")
);
const Q12GetBISCertificateEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q12GetBISCertificateEng")
);
const Q13TraderGetBISCertificateEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q13TraderGetBISCertificateEng")
);
const Q14ApplyForBISCertificateEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q14ApplyForBISCertificateEng")
);
const Q15GetBISCertificateEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q15GetBISCertificateEng")
);
const Q16CheckBISCertificateOnlineEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q16CheckBISCertificateOnlineEng")
);
const Q17DownloadBISCertificateFromManakonlineEng = lazy(() =>
  import(
    "@/pages/BIS Certification Faq/Q17DownloadBISCertificateFromManakOnlineEng"
  )
);
const Q18DownloadBISCertificateEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q18DownloadBISCertificateEng")
);
const Q19GetBISCertificateForImportEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q19GetBISCertificateForImportEng")
);
const Q20BISCertificateForImportInIndiaEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q20BISCertificateForImportInIndiaEng")
);
const Q21CertificateWhoCanApplyEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q21CertificateWhoCanApplyEng")
);
const Q22CertificateForImportCostEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q22CertificateForImportCostEng")
);
const Q23CertificateVsISOCertificateEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q23CertificateVsISOCertificateEng")
);
const Q24BISHallmarkBeFakeEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q24BISHallmarkBeFakeEng")
);
const Q25BISAndISIDifferenceEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q25BISAndISIDifferenceEng")
);
const Q26BISAndISODifferenceEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q26BISAndISODifferenceEng")
);
const Q27BISVsISIEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q27BISVsISIEng")
);
const Q28BISVsISOEng = lazy(() =>
  import("@/pages/BIS Certification Faq/Q28BISVsISOEng")
);
const Q29ForeignCompaniesGetBISCertificationEng = lazy(() =>
  import(
    "@/pages/BIS Certification Faq/Q29ForeignCompaniesGetBISCertificationEng"
  )
);

function FaqsPageRoutes() {
  return (
    <>
      <Route
        path="/faqs"
        element={
          <Suspense fallback={<FaqMainPageSkeleton />}>
            <Faqs />
          </Suspense>
        }
      />
      <Route
        path="/check-bis-certification"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q1CheckBISCertificationEng />
          </Suspense>
        }
      />
      <Route
        path="/get-bis-certification"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q2GetBISCertificationEng />
          </Suspense>
        }
      />
      <Route
        path="/check-bis-certification-online"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q3CheckBISCertificationOnlineEng />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-cost"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q4DoesBIScertificationCostEng />
          </Suspense>
        }
      />
      <Route
        path="/get-bis-certification-in-india"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q5GetBISCertificationInIndiaEng />
          </Suspense>
        }
      />
      <Route
        path="/apply-bis-certification"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q6ApplyBISCertificationEng />
          </Suspense>
        }
      />
      <Route
        path="/verify-bis-certification"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q7HowToVerifyBISCertificationEng />
          </Suspense>
        }
      />
      <Route
        path="/download-bis-certificate-online"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q8DownloadBISCertificateOnlineEng />
          </Suspense>
        }
      />
      <Route
        path="/import-without-bis-certificate"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q9ImportWithoutBISCertificateEng />
          </Suspense>
        }
      />
      <Route
        path="/importer-apply-for-bis-certificate-in-india"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q10ApplyForBISCertificateInIndiaEng />
          </Suspense>
        }
      />
      <Route
        path="/issue-bis-certificate"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q11IssueBISCertificateEng />
          </Suspense>
        }
      />
      <Route
        path="/get-bis-certificate"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q12GetBISCertificateEng />
          </Suspense>
        }
      />
      <Route
        path="/trader-get-bis-certificate"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q13TraderGetBISCertificateEng />
          </Suspense>
        }
      />
      <Route
        path="/apply-bis-certificate"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q14ApplyForBISCertificateEng />
          </Suspense>
        }
      />
      <Route
        path="/how-to-get-bis-certificate"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q15GetBISCertificateEng />
          </Suspense>
        }
      />
      <Route
        path="/how-to-check-bis-certificate-online"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q16CheckBISCertificateOnlineEng />
          </Suspense>
        }
      />
      <Route
        path="/download-bis-certificate-manakonline"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q17DownloadBISCertificateFromManakonlineEng />
          </Suspense>
        }
      />
      <Route
        path="/how-to-download-bis-certificate"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q18DownloadBISCertificateEng />
          </Suspense>
        }
      />
      <Route
        path="/bis-certificate-import"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q19GetBISCertificateForImportEng />
          </Suspense>
        }
      />
      <Route
        path="/bis-certificate-for-import-in-india"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q20BISCertificateForImportInIndiaEng />
          </Suspense>
        }
      />
      <Route
        path="/bis-certificate-who-can-apply"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q21CertificateWhoCanApplyEng />
          </Suspense>
        }
      />
      <Route
        path="/bis-certificate-for-import-cost"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q22CertificateForImportCostEng />
          </Suspense>
        }
      />
      <Route
        path="/bis-certificate-vs-iso-certificate"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q23CertificateVsISOCertificateEng />
          </Suspense>
        }
      />
      <Route
        path="/can-bis-hallmark-be-fake"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q24BISHallmarkBeFakeEng />
          </Suspense>
        }
      />
      <Route
        path="/bis-isi-difference"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q25BISAndISIDifferenceEng />
          </Suspense>
        }
      />
      <Route
        path="/bis-and-iso-difference"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q26BISAndISODifferenceEng />
          </Suspense>
        }
      />
      <Route
        path="/bis-vs-isi"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q27BISVsISIEng />
          </Suspense>
        }
      />
      <Route
        path="/bis-vs-iso"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q28BISVsISOEng />
          </Suspense>
        }
      />
      <Route
        path="/can-foreign-companies-get-bis-certification"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Q29ForeignCompaniesGetBISCertificationEng />
          </Suspense>
        }
      />
    </>
  );
}

export default FaqsPageRoutes;
