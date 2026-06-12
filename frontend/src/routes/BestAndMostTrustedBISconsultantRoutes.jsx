import { Route } from "react-router-dom";
import BestAndMostTrustedBISconsultantinIndia from "@/pages/BestAndMostTrustedBISconsultant/BestAndmostTrustedBISconsultantinIndia";

export const BestAndMostTrustedBISconsultantRoutes = () => {
  return (
    <>
      <Route
        path="/best-and-most-trusted-bis-consultant-india"
        element={<BestAndMostTrustedBISconsultantinIndia />}
      />
    </>
  );
};
