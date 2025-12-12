import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import BISCertificationProductsSkeleton from "@/components/ui/bis-certification-products-skeleton";
import BISCertificationProductsPageSkeleton from "@/components/ui/bis-certification-products-page-skeleton";
import BISCertificationProducts from "../pages/BISCertificationProducts/BISCertificationProducts";
import BISCertificateForBunkBeds from "../pages/BISCertificationProducts/BISCertificateForBunkBeds";
import BISCertificateForBeds from "../pages/BISCertificationProducts/BISCertificateForBeds";
import BISCertificateForStorageUnit from "../pages/BISCertificationProducts/BISCertificateForStorageUnit";
import BISCertificateForTablesAndDesksUnit from "../pages/BISCertificationProducts/BISCertificateForTablesAndDesksUnit";
import BISCertificateForWorkChairs from "../pages/BISCertificationProducts/BISCertificateForWorkChairs";
import BISCertificateForChairAndStools from "../pages/BISCertificationProducts/BISCertificateForChairAndStools";

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
      <Route
        path="/bis-certification-for-beds-is-17635"
        element={
          <Suspense fallback={<BISCertificationProductsPageSkeleton />}>
            <BISCertificateForBeds />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-for-storage-unit-is-17634"
        element={
          <Suspense fallback={<BISCertificationProductsPageSkeleton />}>
            <BISCertificateForStorageUnit />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-for-tables-&-desks-unit-is-17633"
        element={
          <Suspense fallback={<BISCertificationProductsPageSkeleton />}>
            <BISCertificateForTablesAndDesksUnit />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-for-work-chairs-is-17631"
        element={
          <Suspense fallback={<BISCertificationProductsPageSkeleton />}>
            <BISCertificateForWorkChairs />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-for-chair-&-stools-is-17632"
        element={
          <Suspense fallback={<BISCertificationProductsPageSkeleton />}>
            <BISCertificateForChairAndStools />
          </Suspense>
        }
      />
      <Route
        path="/bis-certification-for-welded-pipes-and-tubes-is-17876"
        element={
          <Suspense fallback={<BISCertificationProductsPageSkeleton />}>
            <BISCertificateForWeldedPipesAndTubes />
          </Suspense>
        }
      />
    </>
  );
};


export default BISCertificationProductRoutes;
