import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import BlogsSkeleton from "@/components/ui/blogs-skeleton";

const BahrainBlog = lazy(() => import("@/blogs/BahrainBlog/BahrainBlog"));
const LangBahrainBlog = lazy(() =>
  import("@/blogs/BahrainBlog/LangBahrainBlog")
);
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

// BIS Certification Products Blogs
const BISCertificateForBunkBeds = lazy(() =>
  import("@/blogs/BISCertificateForBunkBeds")
);
const BISCertificateForBeds = lazy(() =>
  import("@/blogs/BISCertificateForBeds")
);
const BISCertificateForStorageUnit = lazy(() =>
  import("@/blogs/BISCertificateForStorageUnit")
);
const BISCertificateForTablesAndDesksUnit = lazy(() =>
  import("@/blogs/BISCertificateForTablesAndDesksUnit")
);
const BISCertificateForWorkChairs = lazy(() =>
  import("@/blogs/BISCertificateForWorkChairs")
);
const BISCertificateForChairAndStools = lazy(() =>
  import("@/blogs/BISCertificateForChairAndStools")
);
const BISCertificateForWeldedPipesAndTubes = lazy(() =>
  import("@/blogs/BISCertificateForWeldedPipesAndTubes")
);
const BISCertificateForSeamlessPipesAndTubes = lazy(() =>
  import("@/blogs/BISCertificateForSeamlessPipesAndTubes")
);
const BISCertificateForFlashlight = lazy(() =>
  import("@/blogs/BISCertificateForFlashlight")
);
const BISCertificationSolarFlatPlate = lazy(() =>
  import("@/blogs/BISCertificationSolarFlatPlate")
);
const BISCertificateElectricFenceEnergizers = lazy(() =>
  import("@/blogs/BISCertificationElectricFenceEnergizers")
);
const BISCertificateForStorageWaterTank = lazy(() =>
  import("@/blogs/BISCertificationForStorageWaterTank")
);
const BISCertificationforFibreRopesOfPolyester = lazy(() =>
  import("@/blogs/BISCertificationforFibreRopesOfPolyester")
);
const BISCertificationFibreRopes = lazy(() =>
  import("@/blogs/BISCertificationFibreRopes")
);
const BISCertificationFibreRopesPolyamide = lazy(() =>
  import("@/blogs/BISCertificationFibreRopesPolyamide")
);
const BISCertificateForSteelWireRopes = lazy(() =>
  import("@/blogs/BISCertificationforSteelWireRopes")
);
const BISCertificationMixedPolyolefinFibreRopes = lazy(() =>
  import("@/blogs/BISCertificationMixedPolyolefinFibreRopes")
);
const BISCertificationCompsitSyntheticFibre = lazy(() =>
  import("@/blogs/BISCertificationCompsitSyntheticFibre")
);
const BISCertificationManilaRope = lazy(() =>
  import("@/blogs/BISCertificationManilaRope")
);
const BISCertificationforFlatWovenWebbing = lazy(() =>
  import("@/blogs/BISCertificationforFlatWovenWebbing")
);
const BISCertificationCombinationSideCuttingPliers = lazy(() =>
  import("@/blogs/BISCertificationCombinationSideCuttingPliers")
);
const BISCertificationPipeWrenches = lazy(() =>
  import("@/blogs/BISCertificationPipeWrenches")
);
const BISCertificationRingWrenches = lazy(() =>
  import("@/blogs/BISCertificationRingWrenches")
);
const BISCertificationOpenJawWrenches = lazy(() =>
  import("@/blogs/BISCertificationOpenJawWrenches")
);
const BISCertificationSingleendedOpenjawAdjustableWrenches = lazy(() =>
  import("@/blogs/BISCertificationSingleendedOpenjawAdjustableWrenches")
);
const BISCertificationChainPipeWrenches = lazy(() =>
  import("@/blogs/BISCertificationChainPipeWrenches")
);
const BISCertificateBatteryOperatedAirPurifier = lazy(() =>
  import("@/blogs/BISCertificationBatteryOperatedAirPurifier")
);
const BISCertificateForFootWarmerandHeatingMats = lazy(() =>
  import("@/blogs/BISCertificationFootWarmerandHeatingMats")
);
const BISCertificateForBatteryOperatedToothbrush = lazy(() =>
  import("@/blogs/BISCertificationBatteryOperatedToothbrush")
);

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
      {/* <Route
        path="/bis-license-for-bunk-beds-Indian-bis"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BunkBedsBlog />
          </Suspense>
        }
      /> */}
      {/* <Route
        path="/bis-license-for-storage-units-Indian-bis"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <StorageUnitsBlog />
          </Suspense>
        }
      /> */}
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

      {/* BIS Certification Products Blogs */}
      <Route
        path="/blogs/isi-products/bunk-beds-is-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBunkBeds />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/beds-is-17635"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBeds />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/storage-unit-is-17634"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForStorageUnit />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/tables-&-desks-is-17633"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForTablesAndDesksUnit />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/work-chairs-is-17631"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForWorkChairs />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/chairs-and-stools-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForChairAndStools />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/welded-pipes-&-tubes-is-17876"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForWeldedPipesAndTubes />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/seamless-pipes-&-tubes-is-17875"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForSeamlessPipesAndTubes />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/flashlight-is-2083"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFlashlight />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/solar-flat-plate-collector-is-12933"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificationSolarFlatPlate />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/electric-fence-energizers-is-302-2-76"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateElectricFenceEnergizers />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/solar-water-heating-systems-is-16542"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForStorageWaterTank />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/fibre-ropes-polyster-is-17609"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificationforFibreRopesOfPolyester />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/fibre-ropes-polyethylene-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificationFibreRopes />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/fibre-ropes-polyamide-is-4572"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificationFibreRopesPolyamide />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/steel-wire-ropes-is-1804"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForSteelWireRopes />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/mixed-polylefin-fibre-ropes-is-14929:2022"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificationMixedPolyolefinFibreRopes />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/compsite-synthetic-fibre-ropes-is-14928"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificationCompsitSyntheticFibre />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/manila-ropes-is-1084"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificationManilaRope />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/flat-woven-webbing-slings-is-15041"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificationforFlatWovenWebbing />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/combination-side-cutting-pliers-is-3650"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificationCombinationSideCuttingPliers />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/pipe-wrenches-is-4003"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificationPipeWrenches />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/ring-wrenches-is-2029"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificationRingWrenches />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/open-jaw-wrenches-is-2028"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificationOpenJawWrenches />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/adjustable-wrenches-is-6149"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificationSingleendedOpenjawAdjustableWrenches />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/chain-pipe-wrenches-is-4123"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificationChainPipeWrenches />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/battery-operated-air-purifier-is-302"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateBatteryOperatedAirPurifier />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/foot-warmer-&-heating-mats-is-302"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFootWarmerandHeatingMats />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/battery-operated-tootbrush-is-302"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBatteryOperatedToothbrush />
          </Suspense>
        }
      />
    </>
  );
};
