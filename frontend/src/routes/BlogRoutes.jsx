import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import BlogsSkeleton from "@/components/ui/blogs-skeleton";

const BahrainBlog = lazy(() => import("@/blogs/BahrainBlog/BahrainBlog"));
const LangBahrainBlog = lazy(() =>
  import("@/blogs/BahrainBlog/LangBahrainBlog")
);
const BunkBedsBlog = lazy(() => import("@/blogs/BunkBedsBlog"));
const DubaiBlog = lazy(() => import("@/blogs/DubaiBlog/DubaiBlog"));
const LangDubaiBlog = lazy(() => import("@/blogs/DubaiBlog/LangDubaiBlog"));
const FranceBlog = lazy(() => import("@/blogs/FranceBlog/FranceBlog"));
const LangFranceBlog = lazy(() => import("@/blogs/FranceBlog/LangFranceBlog"));
const GermanyBlog = lazy(() => import("@/blogs/GermanyBlog/GermanyBlog"));
const LangGermanyBlog = lazy(() =>
  import("@/blogs/GermanyBlog/LangGermanyBlog")
);
const IndonesiaBlog = lazy(() => import("@/blogs/IndonesiaBlog/IndonesiaBlog"));
const LangIndonesiaBlog = lazy(() =>
  import("@/blogs/IndonesiaBlog/LangIndonesiaBlog")
);
const IranBlog = lazy(() => import("@/blogs/IranBlog/IranBlog"));
const LangIranBlog = lazy(() => import("@/blogs/IranBlog/LangIranBlog"));
const IraqBlog = lazy(() => import("@/blogs/IraqBlog/IraqBlog"));
const LangIraqBlog = lazy(() => import("@/blogs/IraqBlog/LangIraqBlog"));
const ItalyBlog = lazy(() => import("@/blogs/ItalyBlog/ItalyBlog"));
const LangItalyBlog = lazy(() => import("@/blogs/ItalyBlog/LangItalyBlog"));
const JapanBlog = lazy(() => import("@/blogs/JapanBlog/JapanBlog"));
const LangJapanBlog = lazy(() => import("@/blogs/JapanBlog/LangJapanBlog"));
const KoreaBlog = lazy(() => import("@/blogs/KoreaBlog/KoreaBlog"));
const LangKoreaBlog = lazy(() => import("@/blogs/KoreaBlog/LangKoreaBlog"));
const LangNetherlandsBlog = lazy(() =>
  import("@/blogs/NetherlandsBlog/LangNetherlandsBlog")
);
const NetherlandsBlog = lazy(() =>
  import("@/blogs/NetherlandsBlog/NetherlandsBlog")
);
const LangQatarBlog = lazy(() => import("@/blogs/QatarBlog/LangQatarBlog"));
const QatarBlog = lazy(() => import("@/blogs/QatarBlog/QatarBlog"));
const RefinedZincBlog = lazy(() => import("@/blogs/RefinedZincBlog"));
const LangSpainBlog = lazy(() => import("@/blogs/SpainBlog/LangSpainBlog"));
const SpainBlog = lazy(() => import("@/blogs/SpainBlog/SpainBlog"));
const StorageUnitsBlog = lazy(() => import("@/blogs/StorageUnitsBlog"));
const LangThailandBlog = lazy(() =>
  import("@/blogs/ThailandBlog/LangThailandBlog")
);
const ThailandBlog = lazy(() => import("@/blogs/ThailandBlog/ThailandBlog"));
const TinIngotBlog = lazy(() => import("@/blogs/TinIngotBlog"));
const LangUAEBlog = lazy(() => import("@/blogs/UAEBlog/LangUAEBlog"));
const UAEBlog = lazy(() => import("@/blogs/UAEBlog/UAEBlog"));
const USABlog = lazy(() => import("@/blogs/USABlog"));
const LangVietnamBlog = lazy(() =>
  import("@/blogs/VietnamBlog/LangVietnamBlog")
);
const VietnamBlog = lazy(() => import("@/blogs/VietnamBlog/VietnamBlog"));

export const BlogRoutes = () => {
  return (
    <>
      <Route
        path="/bis-certificate-for-tin-ingots"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <TinIngotBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certificate-for-refined-zinc"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <RefinedZincBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-license-for-bunk-beds-Indian-bis"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BunkBedsBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-license-for-storage-units-Indian-bis"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <StorageUnitsBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-indonesia"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <IndonesiaBlog />
          </Suspense>
        }
      />
      <Route
        path="/sertifikasi-bis-di-indonesia"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangIndonesiaBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-netherlands"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <NetherlandsBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certificering-in-nederland"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangNetherlandsBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-korea"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <KoreaBlog />
          </Suspense>
        }
      />
      <Route
        path="/hangug-ui-bis-injeung"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangKoreaBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-japan"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <JapanBlog />
          </Suspense>
        }
      />
      <Route
        path="/nihon-niokeru-bis-ninsho"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangJapanBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-italy"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <ItalyBlog />
          </Suspense>
        }
      />
      <Route
        path="/certificazione-bis-in-italia"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangItalyBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-spain"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <SpainBlog />
          </Suspense>
        }
      />
      <Route
        path="/certificacion-bis-en-espana"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangSpainBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-france"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <FranceBlog />
          </Suspense>
        }
      />
      <Route
        path="/certification-bis-en-france"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangFranceBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-germany"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <GermanyBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-zertifizierung-in-deutschland"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangGermanyBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-usa"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <USABlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-vietnam"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <VietnamBlog />
          </Suspense>
        }
      />
      <Route
        path="/chung-nhan-bis-tai-viet-nam"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangVietnamBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-thailand"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <ThailandBlog />
          </Suspense>
        }
      />
      <Route
        path="/kan-rap-rong-bis-nai-prathet-thai"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangThailandBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-uae"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <UAEBlog />
          </Suspense>
        }
      />
      <Route
        path="/shahadat-bis-fi-al-imarat"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangUAEBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-qatar"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <QatarBlog />
          </Suspense>
        }
      />
      <Route
        path="/shahadat-bis-fi-qatar"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangQatarBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-bahrain"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BahrainBlog />
          </Suspense>
        }
      />
      <Route
        path="/shahadat-bis-fi-al-bahrain"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangBahrainBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-dubai"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <DubaiBlog />
          </Suspense>
        }
      />
      <Route
        path="/shahadat-bis-fi-dubai"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangDubaiBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-iran"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <IranBlog />
          </Suspense>
        }
      />
      <Route
        path="/shahadat-bis-fi-iran"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangIranBlog />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-in-iraq"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <IraqBlog />
          </Suspense>
        }
      />
      <Route
        path="/shahadat-bis-fi-al-iraq"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <LangIraqBlog />
          </Suspense>
        }
      />
    </>
  );
};
