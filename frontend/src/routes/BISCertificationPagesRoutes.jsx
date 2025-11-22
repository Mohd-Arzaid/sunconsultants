import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import ServicesPageSkeleton from "@/components/ui/services-page-skeleton";

const BISCertification = lazy(() =>
  import("../pages/BISCertification/BISCertification")
);
const BISCertificationSpanish = lazy(() =>
  import("../pages/BISCertification/BISCertificationSpanish")
);
const BISCertificationGerman = lazy(() =>
  import("../pages/BISCertification/BISCertificationGerman")
);
const BISCertificationFrench = lazy(() =>
  import("../pages/BISCertification/BISCertificationFrench")
);
const BISCertificationIndonesian = lazy(() =>
  import("../pages/BISCertification/BISCertificationIndonesian")
);
const BISCertificationItalian = lazy(() =>
  import("../pages/BISCertification/BISCertificationItalian")
);
const BISCertificationJapanese = lazy(() =>
  import("../pages/BISCertification/BISCertificationJapanese")
);
const BISCertificationKorean = lazy(() =>
  import("../pages/BISCertification/BISCertificationKorean")
);
const BISCertificationDutch = lazy(() =>
  import("../pages/BISCertification/BISCertificationDutch")
);
const BISCertificationThai = lazy(() =>
  import("../pages/BISCertification/BISCertificationThai")
);
const BISCertificationVietnamese = lazy(() =>
  import("../pages/BISCertification/BISCertificationVietnamese")
);
const BISCertificationArabic = lazy(() =>
  import("../pages/BISCertification/BISCertificationArabic")
);
const BISCertificationChinese = lazy(() =>
  import("../pages/BISCertification/BISCertificationChinese")
);

export const BISCertificationPagesRoutes = () => {
  return (
    <>
      {/* BIS Certification English Page */}
      <Route
        path="what-is-bis-certificate-indian-bis"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISCertification />
          </Suspense>
        }
      />
      {/* BIS Certification Spanish Page */}
      <Route
        path="/es/que-es-el-certificado-bis-bis-indio"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISCertificationSpanish />
          </Suspense>
        }
      />
      {/* BIS Certification German Page */}
      <Route
        path="/de/was-ist-das-bis-zertifikat-indisches-bis"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISCertificationGerman />
          </Suspense>
        }
      />
      {/* BIS Certification French Page */}
      <Route
        path="/fr/quest-ce-que-le-certificat-bis-indien"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISCertificationFrench />
          </Suspense>
        }
      />
      {/* BIS Certification Indonesian Page */}
      <Route
        path="/id/apa-itu-sertifikat-bis-bis-india"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISCertificationIndonesian />
          </Suspense>
        }
      />
      {/* BIS Certification Italian Page */}
      <Route
        path="/it/cose-il-certificato-bis-indiano"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISCertificationItalian />
          </Suspense>
        }
      />
      {/* BIS Certification Japanese Page */}
      <Route
        path="/ja/bis-shomeisho-toha-nani-ka-indo-no-bis"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISCertificationJapanese />
          </Suspense>
        }
      />
      {/* BIS Certification Korean Page */}
      <Route
        path="/ko/bis-jeungmyeongseo-ga-mueos-indo-bis"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISCertificationKorean />
          </Suspense>
        }
      />
      {/* BIS Certification Dutch Page */}
      <Route
        path="/nl/wat-is-het-bis-certificaat-indiaas-bis"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISCertificationDutch />
          </Suspense>
        }
      />
      {/* BIS Certification Thai Page */}
      <Route
        path="/th/bis-certificate-khue-a-rai-bis-india"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISCertificationThai />
          </Suspense>
        }
      />
      {/* BIS Certification Vietnamese Page */}
      <Route
        path="/vi/chung-chi-bis-la-gi-bis-an-do"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISCertificationVietnamese />
          </Suspense>
        }
      />
      {/* BIS Certification Arabic Page */}
      <Route
        path="/ar/ma-huwa-shahadat-bis-bis-alhind"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISCertificationArabic />
          </Suspense>
        }
      />
      {/* BIS Certification Chinese Page */}
      <Route
        path="/zh/bis-zheng-shu-shi-shen-me-yin-du-bis"
        element={
          <Suspense fallback={<ServicesPageSkeleton />}>
            <BISCertificationChinese />
          </Suspense>
        }
      />
    </>
  );
};
