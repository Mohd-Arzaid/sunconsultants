import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MinistryUpdates from "../pages/MinistryUpdates";
import MinistryUpdatesSkeleton from "@/components/ui/ministry-updates-skeleton";

// Lazy load all individual ministry update pages
const RefinedZincQCOWithdrawOrderEng = lazy(() =>
  import(
    "@/pages/MinistryUpdatesPages/RefinedZincQCOWithdrawOrder/RefinedZincQCOWithdrawOrderEng"
  )
);
const AluminiumAndAluminiumAlloysQCOWithdrawOrderEng = lazy(() =>
  import(
    "@/pages/MinistryUpdatesPages/AluminiumAndAluminiumAlloysQCOWithdrawOrder/AluminiumAndAluminiumAlloysQCOWithdrawOrderEng"
  )
);
const CopperQCOWithdrawOrderEng = lazy(() =>
  import(
    "@/pages/MinistryUpdatesPages/CopperQCOWithdrawOrder/CopperQCOWithdrawOrderEng"
  )
);
const TinIngotQCOWithdrawOrderEng = lazy(() =>
  import(
    "@/pages/MinistryUpdatesPages/TinIngotQCOWithdrawOrder/TinIngotQCOWithdrawOrderEng"
  )
);
const RefinedNickelQCOWithdrawOrderEng = lazy(() =>
  import(
    "@/pages/MinistryUpdatesPages/RefinedNickelQCOWithdrawOrder/RefinedNickelQCOWithdrawOrderEng"
  )
);
const NickelPowderQCOWithdrawOrderEng = lazy(() =>
  import(
    "@/pages/MinistryUpdatesPages/NickelPowderQCOWithdrawOrder/NickelPowderQCOWithdrawOrderEng"
  )
);
const PetrochemicalAndPolymerProductsQCOWithdrawOrderEng = lazy(() =>
  import(
    "@/pages/MinistryUpdatesPages/PetrochemicalAndPolymerProductsQCOWithdrawOrder/PetrochemicalAndPolymerProductsQCOWithdrawOrderEng"
  )
);
const SchemeXQCOWithdrawOrderEng = lazy(() =>
  import(
    "@/pages/MinistryUpdatesPages/SchemeXQCOWithdrawOrder/SchemeXQCOWithdrawOrderEng"
  )
);

const SteelProductsAmendment2025Eng = lazy(() =>
  import(
    "@/pages/MinistryUpdatesPages/SteelProductsAmendment2025/SteelProductsAmendment2025Eng"
  )
);
const TolueneQCOWithdrawOrderEng = lazy(() =>
  import("@/pages/MinistryUpdatesPages/TolueneEng")
);
const MethylAcrylateEthylAcrylateQCOWithdrawOrderEng = lazy(() =>
  import("@/pages/MinistryUpdatesPages/MethylAcrylateEthylAcrylateEng")
);
const VinylAcetateMonomerQCOWithdrawOrderEng = lazy(() =>
  import("@/pages/MinistryUpdatesPages/VinylAcetateMonomerEng")
);
const VinylChlorideMonomerQCOWithdrawOrderEng = lazy(() =>
  import("@/pages/MinistryUpdatesPages/VinylChlorideMonomerEng")
);
const EthyleneDichlorideQCOWithdrawOrderEng = lazy(() =>
  import("@/pages/MinistryUpdatesPages/EthyleneDichlorideEng")
);
const PXyleneQCOWithdrawOrderEng = lazy(() =>
  import("@/pages/MinistryUpdatesPages/PXyleneEng")
);
const BISRemovesMandatoryInHouseLaboratoryEng = lazy(() =>
  import(
    "@/pages/MinistryUpdatesPages/BISRemovesMandatoryInHouseLaboratoryEng/BISRemovesMandatoryInHouseLaboratoryEng"
  )
);

export const MinistryUpdatesRoutes = () => {
  return (
    <>
      <Route path="/ministry-updates" element={<MinistryUpdates />} />
      <Route
        path="/ministry-updates/refined-zinc-qco-withdraw-order"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <RefinedZincQCOWithdrawOrderEng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/aluminium-and-aluminium-alloys-qco-withdraw-order"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <AluminiumAndAluminiumAlloysQCOWithdrawOrderEng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/copper-qco-withdraw-order"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <CopperQCOWithdrawOrderEng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/tin-ingot-qco-withdraw-order"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <TinIngotQCOWithdrawOrderEng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/refined-nickel-qco-withdraw-order"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <RefinedNickelQCOWithdrawOrderEng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/nickel-qco-withdraw-order"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <NickelPowderQCOWithdrawOrderEng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/petrochemical-and-polymer-products-qco-withdraw-order"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <PetrochemicalAndPolymerProductsQCOWithdrawOrderEng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/scheme-x-qco-withdraw-order"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <SchemeXQCOWithdrawOrderEng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/steel-products-amendment-2025"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <SteelProductsAmendment2025Eng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/toluene-qco-withdraw-order"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <TolueneQCOWithdrawOrderEng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/methyl-acrylate-ethyl-acrylate-qco-withdraw-order"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <MethylAcrylateEthylAcrylateQCOWithdrawOrderEng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/vinyl-acetate-monomer-qco-withdraw-order"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <VinylAcetateMonomerQCOWithdrawOrderEng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/vinyl-chloride-monomer-qco-withdraw-order"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <VinylChlorideMonomerQCOWithdrawOrderEng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/ethylene-dichloride-qco-withdraw-order"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <EthyleneDichlorideQCOWithdrawOrderEng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/p-xylene-qco-withdraw-order"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <PXyleneQCOWithdrawOrderEng />
          </Suspense>
        }
      />
      <Route
        path="/ministry-updates/bis-in-house-lab-requirement"
        element={
          <Suspense fallback={<MinistryUpdatesSkeleton />}>
            <BISRemovesMandatoryInHouseLaboratoryEng />
          </Suspense>
        }
      />
    </>
  );
};
