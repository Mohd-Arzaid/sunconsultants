import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import ServicesPageSkeleton from "@/components/ui/services-page-skeleton";

const CRSRegistration = lazy(() =>
  import("../pages/CRSRegistration/CRSRegistration")
);
const CRSRegistrationJapanese = lazy(() =>
  import("../pages/CRSRegistration/CRSRegistrationJapanese")
);
const CRSRegistrationThai = lazy(() =>
  import("../pages/CRSRegistration/CRSRegistrationThai")
);
const CRSRegistrationKorean = lazy(() =>
  import("../pages/CRSRegistration/CRSRegistrationKorean")
);
const CRSRegistrationIndonesian = lazy(() =>
  import("../pages/CRSRegistration/CRSRegistrationIndonesian")
);
const CRSRegistrationSpanish = lazy(() =>
  import("../pages/CRSRegistration/CRSRegistrationSpanish")
);
const CRSRegistrationFrench = lazy(() =>
  import("../pages/CRSRegistration/CRSRegistrationFrench")
);
const CRSRegistrationItalian = lazy(() =>
  import("../pages/CRSRegistration/CRSRegistrationItalian")
);
const CRSRegistrationDutch = lazy(() =>
  import("../pages/CRSRegistration/CRSRegistrationDutch")
);
const CRSRegistrationGerman = lazy(() =>
  import("../pages/CRSRegistration/CRSRegistrationGerman")
);
const CRSRegistrationVietnamese = lazy(() =>
  import("../pages/CRSRegistration/CRSRegistrationVietnamese")
);
const CRSRegistrationArabic = lazy(() =>
  import("../pages/CRSRegistration/CRSRegistrationArabic")
);
const CRSRegistrationChinese = lazy(() =>
  import("../pages/CRSRegistration/CRSRegistrationChinese")
);

export const CRSRegistrationRoutes = () => {
  return (
    <>
      {/* ============================== CRS routes (all languages) ============================== */}
      {/* English */}
      <Route
        path="what-is-crs-bis-or-crs-registration"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CRSRegistration />
          </Suspense>
        }
      />
      {/* Japanese */}
      <Route
        path="/ja/crs-bis-toha-nani-ka-crs-toroku"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CRSRegistrationJapanese />
          </Suspense>
        }
      />
      {/* Thai */}
      <Route
        path="/th/crs-bis-khue-a-rai-rab-phit-thab-crs"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CRSRegistrationThai />
          </Suspense>
        }
      />
      {/* Korean */}
      <Route
        path="/ko/crs-bis-i-mueos-inga-crs-deunglog"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CRSRegistrationKorean />
          </Suspense>
        }
      />
      {/* Indonesian */}
      <Route
        path="/id/apa-itu-crs-bis-atau-registrasi-crs"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CRSRegistrationIndonesian />
          </Suspense>
        }
      />
      {/* Spanish */}
      <Route
        path="/es/que-es-crs-bis-o-registro-crs"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CRSRegistrationSpanish />
          </Suspense>
        }
      />
      {/* French */}
      <Route
        path="/fr/quest-ce-que-le-crs-bis-ou-lenregistrement-crs"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CRSRegistrationFrench />
          </Suspense>
        }
      />
      {/* Italian */}
      <Route
        path="/it/cose-il-crs-bis-o-registrazione-crs"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CRSRegistrationItalian />
          </Suspense>
        }
      />
      {/* Dutch */}
      <Route
        path="/nl/wat-is-crs-bis-of-crs-registratie"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CRSRegistrationDutch />
          </Suspense>
        }
      />
      {/* German */}
      <Route
        path="/de/was-ist-crs-bis-oder-crs-registrierung"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CRSRegistrationGerman />
          </Suspense>
        }
      />
      {/* Vietnamese */}
      <Route
        path="/vi/crs-bis-la-gi-hoac-dang-ky-crs"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CRSRegistrationVietnamese />
          </Suspense>
        }
      />
      {/* Arabic */}
      <Route
        path="/ar/ma-huwa-crs-bis-aw-tasjeel-crs"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CRSRegistrationArabic />
          </Suspense>
        }
      />
      {/* Chinese */}
      <Route
        path="/zh/crs-bis-shi-shen-me-huo-crs-deng-ji"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <CRSRegistrationChinese />
          </Suspense>
        }
      />
      {/* ============================ End CRS routes (all languages) ============================ */}
    </>
  );
};
