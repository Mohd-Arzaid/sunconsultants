import { Route } from "react-router-dom";
import { BISFM } from "../components/manual/BISFM";
import ArabicBISFM from "../pages/ArabicBISFM";

export const BISFMPagesRoutes = () => {
  return (
    <>
      <Route
        path="a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
        element={<BISFM />}
      />
      <Route
        path="/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind"
        element={<ArabicBISFM />}
      />
    </>
  );
};
