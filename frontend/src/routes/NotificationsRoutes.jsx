import { Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Notification from "../pages/Notification";
import NotificationsSkeleton from "@/components/ui/notifications-skeleton";

// Lazy load notification detail page
const NotificationDetail = lazy(() => import("../pages/NotificationDetail"));

export const NotificationsRoutes = () => {
  return (
    <>
      <Route path="/bis-qco-updates" element={<Notification />} />
      <Route
        path="/bis-qco-updates/:notificationName"
        element={
          <Suspense fallback={<NotificationsSkeleton />}>
            <NotificationDetail />
          </Suspense>
        }
      />
    </>
  );
};
