import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import FaqPageSkeleton from "@/components/ui/faq-page-skeleton";

// Lazy load Faqs component
const Faqs = lazy(() => import("@/pages/Faqs"));

function FaqsPageRoutes() {
  return (
    <>
      <Route
        path="/faqs"
        element={
          <Suspense fallback={<FaqPageSkeleton />}>
            <Faqs />
          </Suspense>
        }
      />
    </>
  );
}

export default FaqsPageRoutes;
