import { Route } from "react-router-dom";
import MinistryUpdates from "../pages/MinistryUpdates";
import RefinedZincQCOWithdrawOrderEng from "@/pages/MinistryUpdatesPages/RefinedZincQCOWithdrawOrder/RefinedZincQCOWithdrawOrderEng";
import AluminiumAndAluminiumAlloysQCOWithdrawOrderEng from "@/pages/MinistryUpdatesPages/AluminiumAndAluminiumAlloysQCOWithdrawOrder/AluminiumAndAluminiumAlloysQCOWithdrawOrderEng";

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
    </>
  );
};
