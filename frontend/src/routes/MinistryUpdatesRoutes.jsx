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
    </>
  );
};
