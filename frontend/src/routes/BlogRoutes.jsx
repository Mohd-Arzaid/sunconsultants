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
  import("@/blogs/BISCertificateForBunkBeds/BISCertificateForBunkBeds")
);
const BISCertificateForBunkBedsFrench = lazy(() =>
  import("@/blogs/BISCertificateForBunkBeds/BISCertificateForBunkBedsFrench")
);
const BISCertificateForBunkBedsDutch = lazy(() =>
  import("@/blogs/BISCertificateForBunkBeds/BISCertificateForBunkBedsDutch")
);
const BISCertificateForBunkBedsArabic = lazy(() =>
  import("@/blogs/BISCertificateForBunkBeds/BISCertificateForBunkBedsArabic")
);
const BISCertificateForBunkBedsJapanese = lazy(() =>
  import("@/blogs/BISCertificateForBunkBeds/BISCertificateForBunkBedsJapanese")
);
const BISCertificateForBunkBedsChinese = lazy(() =>
  import("@/blogs/BISCertificateForBunkBeds/BISCertificateForBunkBedsChinese")
);
const BISCertificateForBunkBedsGerman = lazy(() =>
  import("@/blogs/BISCertificateForBunkBeds/BISCertificateForBunkBedsGerman")
);
const BISCertificateForBunkBedsIndonesian = lazy(() =>
  import(
    "@/blogs/BISCertificateForBunkBeds/BISCertificateForBunkBedsIndonesian"
  )
);
const BISCertificateForBunkBedsItalian = lazy(() =>
  import("@/blogs/BISCertificateForBunkBeds/BISCertificateForBunkBedsItalian")
);
const BISCertificateForBunkBedsKorean = lazy(() =>
  import("@/blogs/BISCertificateForBunkBeds/BISCertificateForBunkBedsKorean")
);
const BISCertificateForBunkBedsSpanish = lazy(() =>
  import("@/blogs/BISCertificateForBunkBeds/BISCertificateForBunkBedsSpanish")
);
const BISCertificateForBunkBedsThai = lazy(() =>
  import("@/blogs/BISCertificateForBunkBeds/BISCertificateForBunkBedsThai")
);
const BISCertificateForBunkBedsVietnamese = lazy(() =>
  import(
    "@/blogs/BISCertificateForBunkBeds/BISCertificateForBunkBedsVietnamese"
  )
);
const BISCertificateForBeds = lazy(() =>
  import("@/blogs/BISCertificateForBeds/BISCertificateForBeds")
);
const BISCertificateForBedsArabic = lazy(() =>
  import("@/blogs/BISCertificateForBeds/BISCertificateForBedsArabic")
);
const BISCertificateForBedsChinese = lazy(() =>
  import("@/blogs/BISCertificateForBeds/BISCertificateForBedsChinese")
);
const BISCertificateForBedsDutch = lazy(() =>
  import("@/blogs/BISCertificateForBeds/BISCertificateForBedsDutch")
);
const BISCertificateForBedsFrench = lazy(() =>
  import("@/blogs/BISCertificateForBeds/BISCertificateForBedsFrench")
);
const BISCertificateForBedsGerman = lazy(() =>
  import("@/blogs/BISCertificateForBeds/BISCertificateForBedsGerman")
);
const BISCertificateForBedsIndonesian = lazy(() =>
  import("@/blogs/BISCertificateForBeds/BISCertificateForBedsIndonesian")
);
const BISCertificateForBedsItalian = lazy(() =>
  import("@/blogs/BISCertificateForBeds/BISCertificateForBedsItalian")
);
const BISCertificateForBedsJapanese = lazy(() =>
  import("@/blogs/BISCertificateForBeds/BISCertificateForBedsJapanese")
);
const BISCertificateForBedsKorean = lazy(() =>
  import("@/blogs/BISCertificateForBeds/BISCertificateForBedsKorean")
);
const BISCertificateForBedsSpanish = lazy(() =>
  import("@/blogs/BISCertificateForBeds/BISCertificateForBedsSpanish")
);
const BISCertificateForBedsThai = lazy(() =>
  import("@/blogs/BISCertificateForBeds/BISCertificateForBedsThai")
);
const BISCertificateForBedsVietnamese = lazy(() =>
  import("@/blogs/BISCertificateForBeds/BISCertificateForBedsVietnamese")
);
const BISCertificateForStorageUnit = lazy(() =>
  import("@/blogs/BISCertificateForStorageUnit")
);
const BISCertificateForTablesAndDesksUnit = lazy(() =>
  import("@/blogs/BISCertificateForTablesAndDesksUnit")
);
const BISCertificateForFurniture = lazy(() =>
  import("@/blogs/BISCertificateForFurniture/BISCertificateforFurniture")
);
const BISCertificateForFurnitureArabic = lazy(() =>
  import("@/blogs/BISCertificateForFurniture/BISCertificateForFurnitureArabic")
);
const BISCertificateForFurnitureChinese = lazy(() =>
  import("@/blogs/BISCertificateForFurniture/BISCertificateForFurnitureChinese")
);
const BISCertificateForFurnitureDutch = lazy(() =>
  import("@/blogs/BISCertificateForFurniture/BISCertificateForFurnitureDutch")
);
const BISCertificateForFurnitureFrench = lazy(() =>
  import("@/blogs/BISCertificateForFurniture/BISCertificateForFurnitureFrench")
);
const BISCertificateForFurnitureGerman = lazy(() =>
  import("@/blogs/BISCertificateForFurniture/BISCertificateForFurnitureGerman")
);
const BISCertificateForFurnitureIndonesian = lazy(() =>
  import("@/blogs/BISCertificateForFurniture/BISCertificateForFurnitureIndonesian")
);
const BISCertificateForFurnitureItalian = lazy(() =>
  import("@/blogs/BISCertificateForFurniture/BISCertificateForFurnitureItalian")
);
const BISCertificateForFurnitureJapanese = lazy(() =>
  import("@/blogs/BISCertificateForFurniture/BISCertificateForFurnitureJapanese")
);
const BISCertificateForFurnitureKorean = lazy(() =>
  import("@/blogs/BISCertificateForFurniture/BISCertificateForFurnitureKorean")
);
const BISCertificateForFurnitureSpanish = lazy(() =>
  import("@/blogs/BISCertificateForFurniture/BISCertificateForFurnitureSpanish")
);
const BISCertificateForFurnitureThai = lazy(() =>
  import("@/blogs/BISCertificateForFurniture/BISCertificateForFurnitureThai")
);
const BISCertificateForFurnitureVietnamese = lazy(() =>
  import("@/blogs/BISCertificateForFurniture/BISCertificateForFurnitureVietnamese")
);
const BISCertificateForWorkChairs = lazy(() =>
  import("@/blogs/BISCertificateForWorkChairs/BISCertificateForWorkChairs")
);
const BISCertificateForWorkChairsArabic = lazy(() =>
  import(
    "@/blogs/BISCertificateForWorkChairs/BISCertificateForWorkChairsArabic"
  )
);
const BISCertificateForWorkChairsChinese = lazy(() =>
  import(
    "@/blogs/BISCertificateForWorkChairs/BISCertificateForWorkChairsChinese"
  )
);
const BISCertificateForWorkChairsDutch = lazy(() =>
  import("@/blogs/BISCertificateForWorkChairs/BISCertificateForWorkChairsDutch")
);
const BISCertificateForWorkChairsFrench = lazy(() =>
  import(
    "@/blogs/BISCertificateForWorkChairs/BISCertificateForWorkChairsFrench"
  )
);
const BISCertificateForWorkChairsGerman = lazy(() =>
  import(
    "@/blogs/BISCertificateForWorkChairs/BISCertificateForWorkChairsGerman"
  )
);
const BISCertificateForWorkChairsIndonesian = lazy(() =>
  import(
    "@/blogs/BISCertificateForWorkChairs/BISCertificateForWorkChairsIndonesian"
  )
);
const BISCertificateForWorkChairsItalian = lazy(() =>
  import(
    "@/blogs/BISCertificateForWorkChairs/BISCertificateForWorkChairsItalian"
  )
);
const BISCertificateForWorkChairsJapanese = lazy(() =>
  import(
    "@/blogs/BISCertificateForWorkChairs/BISCertificateForWorkChairsJapanese"
  )
);
const BISCertificateForWorkChairsKorean = lazy(() =>
  import(
    "@/blogs/BISCertificateForWorkChairs/BISCertificateForWorkChairsKorean"
  )
);
const BISCertificateForWorkChairsSpanish = lazy(() =>
  import(
    "@/blogs/BISCertificateForWorkChairs/BISCertificateForWorkChairsSpanish"
  )
);
const BISCertificateForWorkChairsThai = lazy(() =>
  import("@/blogs/BISCertificateForWorkChairs/BISCertificateForWorkChairsThai")
);
const BISCertificateForWorkChairsVietnamese = lazy(() =>
  import(
    "@/blogs/BISCertificateForWorkChairs/BISCertificateForWorkChairsVietnamese"
  )
);
const BISCertificateForChairAndStools = lazy(() =>
  import(
    "@/blogs/BISCertificateForChairAndStools/BISCertificateForChairAndStools"
  )
);
const BISCertificateForChairAndStoolsArabic = lazy(() =>
  import(
    "@/blogs/BISCertificateForChairAndStools/BISCertificateForChairAndStoolsArabic"
  )
);
const BISCertificateForChairAndStoolsChinese = lazy(() =>
  import(
    "@/blogs/BISCertificateForChairAndStools/BISCertificateForChairAndStoolsChinese"
  )
);
const BISCertificateForChairAndStoolsDutch = lazy(() =>
  import(
    "@/blogs/BISCertificateForChairAndStools/BISCertificateForChairAndStoolsDutch"
  )
);
const BISCertificateForChairAndStoolsFrench = lazy(() =>
  import(
    "@/blogs/BISCertificateForChairAndStools/BISCertificateForChairAndStoolsFrench"
  )
);
const BISCertificateForChairAndStoolsGerman = lazy(() =>
  import(
    "@/blogs/BISCertificateForChairAndStools/BISCertificateForChairAndStoolsGerman"
  )
);
const BISCertificateForChairAndStoolsIndonesian = lazy(() =>
  import(
    "@/blogs/BISCertificateForChairAndStools/BISCertificateForChairAndStoolsIndonesian"
  )
);
const BISCertificateForChairAndStoolsItalian = lazy(() =>
  import(
    "@/blogs/BISCertificateForChairAndStools/BISCertificateForChairAndStoolsItalian"
  )
);
const BISCertificateForChairAndStoolsJapanese = lazy(() =>
  import(
    "@/blogs/BISCertificateForChairAndStools/BISCertificateForChairAndStoolsJapanese"
  )
);
const BISCertificateForChairAndStoolsKorean = lazy(() =>
  import(
    "@/blogs/BISCertificateForChairAndStools/BISCertificateForChairAndStoolsKorean"
  )
);
const BISCertificateForChairAndStoolsSpanish = lazy(() =>
  import(
    "@/blogs/BISCertificateForChairAndStools/BISCertificateForChairAndStoolsSpanish"
  )
);
const BISCertificateForChairAndStoolsThai = lazy(() =>
  import(
    "@/blogs/BISCertificateForChairAndStools/BISCertificateForChairAndStoolsThai"
  )
);
const BISCertificateForChairAndStoolsVietnamese = lazy(() =>
  import(
    "@/blogs/BISCertificateForChairAndStools/BISCertificateForChairAndStoolsVietnamese"
  )
);
const BISCertificateforGeneralPurposeChairsandStoolsArabic = lazy(() =>
  import(
    "@/blogs/BISCertificateforGeneralPurposeChairsandStools/BISCertificateforGeneralPurposeChairsandStoolsArabic"
  )
);
const BISCertificateforGeneralPurposeChairsandStoolsChinese = lazy(() =>
  import(
    "@/blogs/BISCertificateforGeneralPurposeChairsandStools/BISCertificateforGeneralPurposeChairsandStoolsChinese"
  )
);
const BISCertificateForWeldedPipesAndTubes = lazy(() =>
  import("@/blogs/BISCertificateForWeldedPipesAndTubes")
);
const BISCertificateForSeamlessPipesAndTubes = lazy(() =>
  import("@/blogs/BISCertificateForSeamlessPipesAndTubes")
);
const BISCertificateForSeamlessPipesAndTubesChinese = lazy(() =>
  import("@/blogs/BISCertificateForSeamlessPipesAndTubes/BISCertificateForSeamlessPipesAndTubesChinese")
);
const BISCertificateForSeamlessPipesAndTubesArabic = lazy(() =>
  import("@/blogs/BISCertificateForSeamlessPipesAndTubes/BISCertificateForSeamlessPipesAndTubesArabic")
);
const BISCertificateForSeamlessPipesAndTubesDutch = lazy(() =>
  import("@/blogs/BISCertificateForSeamlessPipesAndTubes/BISCertificateForSeamlessPipesAndTubesDutch")
);
const BISCertificateForSeamlessPipesAndTubesFrench = lazy(() =>
  import("@/blogs/BISCertificateForSeamlessPipesAndTubes/BISCertificateForSeamlessPipesAndTubesFrench")
);
const BISCertificateForSeamlessPipesAndTubesGerman = lazy(() =>
  import("@/blogs/BISCertificateForSeamlessPipesAndTubes/BISCertificateForSeamlessPipesAndTubesGerman")
);
const BISCertificateForSeamlessPipesAndTubesIndonesian = lazy(() =>
  import("@/blogs/BISCertificateForSeamlessPipesAndTubes/BISCertificateForSeamlessPipesAndTubesIndonesian")
);
const BISCertificateForSeamlessPipesAndTubesItalian = lazy(() =>
  import("@/blogs/BISCertificateForSeamlessPipesAndTubes/BISCertificateForSeamlessPipesAndTubesItalian")
);
const BISCertificateForSeamlessPipesAndTubesJapanese = lazy(() =>
  import("@/blogs/BISCertificateForSeamlessPipesAndTubes/BISCertificateForSeamlessPipesAndTubesJapanese")
);
const BISCertificateForFlashlight = lazy(() =>
  import("@/blogs/BISCertificateForFlashlight/BISCertificateForFlashlight")
);
const BISCertificateForFlashlightArabic = lazy(() =>
  import(
    "@/blogs/BISCertificateForFlashlight/BISCertificateForFlashlightArabic"
  )
);
const BISCertificateForFlashlightChinese = lazy(() =>
  import(
    "@/blogs/BISCertificateForFlashlight/BISCertificateForFlashlightChinese"
  )
);
const BISCertificateForFlashlightDutch = lazy(() =>
  import("@/blogs/BISCertificateForFlashlight/BISCertificateForFlashlightDutch")
);
const BISCertificateForFlashlightFrench = lazy(() =>
  import(
    "@/blogs/BISCertificateForFlashlight/BISCertificateForFlashlightFrench"
  )
);
const BISCertificateForFlashlightGerman = lazy(() =>
  import(
    "@/blogs/BISCertificateForFlashlight/BISCertificateForFlashlightGerman"
  )
);
const BISCertificateForFlashlightIndonesian = lazy(() =>
  import(
    "@/blogs/BISCertificateForFlashlight/BISCertificateForFlashlightIndonesian"
  )
);
const BISCertificateForFlashlightItalian = lazy(() =>
  import(
    "@/blogs/BISCertificateForFlashlight/BISCertificateForFlashlightItalian"
  )
);
const BISCertificateForFlashlightJapanese = lazy(() =>
  import(
    "@/blogs/BISCertificateForFlashlight/BISCertificateForFlashlightJapanese"
  )
);
const BISCertificateForFlashlightKorean = lazy(() =>
  import(
    "@/blogs/BISCertificateForFlashlight/BISCertificateForFlashlightKorean"
  )
);
const BISCertificateForFlashlightSpanish = lazy(() =>
  import(
    "@/blogs/BISCertificateForFlashlight/BISCertificateForFlashlightSpanish"
  )
);
const BISCertificateForFlashlightThai = lazy(() =>
  import("@/blogs/BISCertificateForFlashlight/BISCertificateForFlashlightThai")
);
const BISCertificateForFlashlightVietnamese = lazy(() =>
  import(
    "@/blogs/BISCertificateForFlashlight/BISCertificateForFlashlightVietnamese"
  )
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

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      {/* Bunk beds page start */}
      <Route
        path="/blogs/isi-products/bunk-beds-is-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBunkBeds />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/lits-superposes-is-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBunkBedsFrench />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/stapelbedden-is-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBunkBedsDutch />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/asrat-muzdawijat-is-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBunkBedsArabic />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/nidan-beddo-is-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBunkBedsJapanese />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/shuang-ceng-chuang-is-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBunkBedsChinese />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/etagenbetten-is-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBunkBedsGerman />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/ranjang-susun-is-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBunkBedsIndonesian />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/letti-a-castello-is-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBunkBedsItalian />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/icheung-chimdae-is-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBunkBedsKorean />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/literas-is-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBunkBedsSpanish />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/teng-song-chan-is-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBunkBedsThai />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/giuong-tang-is-17636"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBunkBedsVietnamese />
          </Suspense>
        }
      />

      {/* Bunk beds page Pages End */}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* ==================================================================== */}

      <Route
        path="/blogs/isi-products/beds-is-17635"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBeds />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/asrat-is-17635"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBedsArabic />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/chuangju-is-17635"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBedsChinese />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/bedden-is-17635"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBedsDutch />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/lits-is-17635"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBedsFrench />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/betten-is-17635"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBedsGerman />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/ranjang-is-17635"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBedsIndonesian />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/letti-is-17635"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBedsItalian />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/beddo-is-17635"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBedsJapanese />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/chimdae-is-17635"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBedsKorean />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/camas-is-17635"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBedsSpanish />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/teng-is-17635"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBedsThai />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/giuong-is-17635"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForBedsVietnamese />
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
        path="/blogs/isi-products/furniture"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFurniture />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/athath"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFurnitureArabic />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/jiaju"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFurnitureChinese />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/meubels"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFurnitureDutch />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/meubles"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFurnitureFrench />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/mobel"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFurnitureGerman />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/perabotan"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFurnitureIndonesian />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/mobili"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFurnitureItalian />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/kagu"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFurnitureJapanese />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/gagu"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFurnitureKorean />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/muebles"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFurnitureSpanish />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/furniture-thai"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFurnitureThai />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/noi-that"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFurnitureVietnamese />
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
        path="/blogs/isi-products/karasi-al-amal-is-17631"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForWorkChairsArabic />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/gong-zuo-yi-is-17631"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForWorkChairsChinese />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/werkstoelen-is-17631"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForWorkChairsDutch />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/chaises-de-travail-is-17631"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForWorkChairsFrench />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/arbeitsstuhle-is-17631"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForWorkChairsGerman />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/kursi-kerja-is-17631"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForWorkChairsIndonesian />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/sedie-da-lavoro-is-17631"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForWorkChairsItalian />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/sagyou-you-isu-is-17631"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForWorkChairsJapanese />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/eobmuyong-uija-is-17631"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForWorkChairsKorean />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/sillas-de-trabajo-is-17631"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForWorkChairsSpanish />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/ghao-ngan-is-17631"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForWorkChairsThai />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/ghe-lam-viec-is-17631"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForWorkChairsVietnamese />
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
        path="/blogs/isi-products/karasi-wa-masaaid-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForChairAndStoolsArabic />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/yizi-he-dengzi-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForChairAndStoolsChinese />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/stoelen-en-krukken-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForChairAndStoolsDutch />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/chaises-et-tabourets-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForChairAndStoolsFrench />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/stuhle-und-hocker-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForChairAndStoolsGerman />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/kursi-dan-bangku-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForChairAndStoolsIndonesian />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/sedie-e-sgabelli-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForChairAndStoolsItalian />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/isu-to-suturu-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForChairAndStoolsJapanese />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/uija-mich-seutul-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForChairAndStoolsKorean />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/sillas-y-taburetes-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForChairAndStoolsSpanish />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/ghao-lae-mang-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForChairAndStoolsThai />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/ghe-va-ghe-dau-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForChairAndStoolsVietnamese />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/karasi-wa-masaaid-ammat-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateforGeneralPurposeChairsandStoolsArabic />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/tong-yong-yizi-he-dengzi-is-17632"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateforGeneralPurposeChairsandStoolsChinese />
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
        path="/blogs/isi-products/wufeng-guan-he-guan-is-17875"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForSeamlessPipesAndTubesChinese />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/anabib-wa-anabib-bila-daraz-is-17875"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForSeamlessPipesAndTubesArabic />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/naadloze-buizen-en-buizen-is-17875"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForSeamlessPipesAndTubesDutch />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/tubes-et-tuyaux-sans-soudure-is-17875"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForSeamlessPipesAndTubesFrench />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/nahtlose-rohre-und-rohre-is-17875"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForSeamlessPipesAndTubesGerman />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/pipa-dan-tabung-tanpa-sambungan-is-17875"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForSeamlessPipesAndTubesIndonesian />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/tubi-e-tubi-senza-saldatura-is-17875"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForSeamlessPipesAndTubesItalian />
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
        path="/blogs/isi-products/masbah-yadawi-is-2083"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFlashlightArabic />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/shoudiantong-is-2083"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFlashlightChinese />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/zaklamp-is-2083"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFlashlightDutch />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/lampe-de-poche-is-2083"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFlashlightFrench />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/taschenlampe-is-2083"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFlashlightGerman />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/senter-is-2083"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFlashlightIndonesian />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/torcia-is-2083"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFlashlightItalian />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/kaichu-dento-is-2083"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFlashlightJapanese />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/sonjeondeung-is-2083"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFlashlightKorean />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/linterna-is-2083"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFlashlightSpanish />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/flashlight-thai-is-2083"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFlashlightThai />
          </Suspense>
        }
      />
      <Route
        path="/blogs/isi-products/den-pin-is-2083"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <BISCertificateForFlashlightVietnamese />
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
        path="/blogs/isi-products/fibre-ropes-polyethylene-8674"
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
