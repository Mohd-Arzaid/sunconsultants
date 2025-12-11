import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import BISCertificationProductsSkeleton from "@/components/ui/bis-certification-products-skeleton";
import BISCertificationProductsPageSkeleton from "@/components/ui/bis-certification-products-page-skeleton";
import BISCertificationProducts from "../pages/BISCertificationProducts/BISCertificationProducts";
import BISCertificateForBunkBeds from "../pages/BISCertificationProducts/BISCertificateForBunkBeds";

const BISCertificationProductRoutes = () => {
  return (
    <>
      <Route
        path="/bis-certification-products"
        element={
          <Suspense fallback={<BISCertificationProductsSkeleton />}>
            <BISCertificationProducts />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-for-bunk-beds-is-17636"
        element={
          <Suspense fallback={<BISCertificationProductsPageSkeleton />}>
            <BISCertificateForBunkBeds />
          </Suspense>
        }
      />
    </>
  );
};

export default BISCertificationProductRoutes;
