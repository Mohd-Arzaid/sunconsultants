import { Route } from "react-router-dom";
import BestAndMostTrustedBISconsultantFrontSection from "@/pages/BestAndMostTrustedBISconsultant/BestAndMostTrustedBISconsultantFrontSection";
import BestAndMostTrustedBISconsultantinIndia from "@/pages/BestAndMostTrustedBISconsultant/BestAndmostTrustedBISconsultantinIndia";

export const BestAndMostTrustedBISconsultantRoutes = () => {
  return (
    <>
      <Route
        path="/best-bis-consultant-india"
        element={<BestAndMostTrustedBISconsultantinIndia />}
      />
      <Route
        path="/best-most-trusted-bis-consultant"
        element={<BestAndMostTrustedBISconsultantFrontSection />}
      />
    </>
  );
};
