import { Route } from "react-router-dom";
import MinistryUpdates from "../pages/MinistryUpdates";
import RefinedZincQCOWithdrawOrderEng from "@/pages/MinistryUpdatesPages/RefinedZincQCOWithdrawOrder/RefinedZincQCOWithdrawOrderEng";
import AluminiumAndAluminiumAlloysQCOWithdrawOrderEng from "@/pages/MinistryUpdatesPages/AluminiumAndAluminiumAlloysQCOWithdrawOrder/AluminiumAndAluminiumAlloysQCOWithdrawOrderEng";
import CopperQCOWithdrawOrderEng from "@/pages/MinistryUpdatesPages/CopperQCOWithdrawOrder/CopperQCOWithdrawOrderEng";
import TinIngotQCOWithdrawOrderEng from "@/pages/MinistryUpdatesPages/TinIngotQCOWithdrawOrder/TinIngotQCOWithdrawOrderEng";
import RefinedNickelQCOWithdrawOrderEng from "@/pages/MinistryUpdatesPages/RefinedNickelQCOWithdrawOrder/RefinedNickelQCOWithdrawOrderEng";
import NickelPowderQCOWithdrawOrderEng from "@/pages/MinistryUpdatesPages/NickelPowderQCOWithdrawOrder/NickelPowderQCOWithdrawOrderEng";
import PetrochemicalAndPolymerProductsQCOWithdrawOrderEng from "@/pages/MinistryUpdatesPages/PetrochemicalAndPolymerProductsQCOWithdrawOrder/PetrochemicalAndPolymerProductsQCOWithdrawOrderEng";
import SchemeXQCOWithdrawOrderEng from "@/pages/MinistryUpdatesPages/SchemeXQCOWithdrawOrder/SchemeXQCOWithdrawOrderEng";

export const MinistryUpdatesRoutes = () => {
  return (
    <>
      <Route path="/ministry-updates" element={<MinistryUpdates />} />
      <Route
        path="/ministry-updates/refined-zinc-qco-withdraw-order"
        element={<RefinedZincQCOWithdrawOrderEng />}
      />
      <Route
        path="/ministry-updates/aluminium-and-aluminium-alloys-qco-withdraw-order"
        element={<AluminiumAndAluminiumAlloysQCOWithdrawOrderEng />}
      />
      <Route
        path="/ministry-updates/copper-qco-withdraw-order"
        element={<CopperQCOWithdrawOrderEng />}
      />
      <Route
        path="/ministry-updates/tin-ingot-qco-withdraw-order"
        element={<TinIngotQCOWithdrawOrderEng />}
      />
      <Route
        path="/ministry-updates/refined-nickel-qco-withdraw-order"
        element={<RefinedNickelQCOWithdrawOrderEng />}
      />
      <Route
        path="/ministry-updates/nickel-qco-withdraw-order"
        element={<NickelPowderQCOWithdrawOrderEng />}
      />
      <Route
        path="/ministry-updates/petrochemical-and-polymer-products-qco-withdraw-order"
        element={<PetrochemicalAndPolymerProductsQCOWithdrawOrderEng />}
      />
      <Route
        path="/ministry-updates/scheme-x-qco-withdraw-order"
        element={<SchemeXQCOWithdrawOrderEng />}
      />
    </>
  );
};
