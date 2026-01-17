// ============================================
// React & React Router Imports
// ============================================
import { Route, Routes, useLocation } from "react-router-dom";
import { useState, lazy, Suspense } from "react";

// ============================================
// Common Components
// ============================================
import Navbar from "./common/Navbar";
import TopBar from "./common/TopBar";
import MobileNav from "./components/common/MobileNav";
import SocialFloatingButtons from "./components/common/SocialFloatingButtons";
import ContactFormPopup from "./components/ContactFormPopup";
import ScrollToTopButton, {
  ScrollToTop,
} from "./components/common/ScrollToTop";
import SEOBreadcrumbs from "./components/common/SEOBreadcrumbs";
import OrganizationSchema from "./components/common/OrganizationSchema";

// ============================================
// Page Components (Direct imports for instant navigation)
// ============================================
import Home from "./pages/Home";

// ============================================
// Lazy Loaded Components
// ============================================
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
import AboutSkeleton from "./components/ui/about-skeleton";
import ContactUsSkeleton from "./components/ui/contact-us-skeleton";
import PrivacyPolicySkeleton from "./components/ui/privacy-policy-skeleton";
import SitemapSkeleton from "./components/ui/sitemap-skeleton";
import InternationalAuditsSkeleton from "./components/ui/international-audits-skeleton";
const InternationalAudits = lazy(() => import("./pages/InternationalAudits"));
const GrantLetter = lazy(() => import("./pages/GrantLetter"));
const AwardPage = lazy(() => import("./pages/AwardPage"));
import ExhibitionSkeleton from "./components/ui/exhibition-skeleton";
const Exhibition = lazy(() => import("./pages/Exhibition"));
import WebinarSkeleton from "./components/ui/webinar-skeleton";
const Webinar = lazy(() => import("./pages/Webinar"));
import VideosSkeleton from "./components/ui/videos-skeleton";
const Videos = lazy(() => import("./pages/Videos"));
import TermsAndConditions from "./pages/TermsAndConditions";
import Error404 from "./pages/404Error";
import BacklinksPage from "./pages/BacklinksPage";

// ============================================
// Blog & Products Components
// ============================================
import LatestBlogs from "./blogs/LatestBlogs";
import SchemeXProducts from "./schemeXProducts/SchemeXProducts";

// ============================================
// Route Components
// ============================================
import { SchemeXProductsRoutes } from "./routes/schemeXProductsRoutes";
import { SchemeXPagesRoutes } from "./routes/schemeXPagesRoutes";
import { BISCertificationPagesRoutes } from "./routes/BISCertificationPagesRoutes";
import { ISIMarkPagesRoutes } from "./routes/ISIMarkPagesRoutes";
import { CRSRegistrationRoutes } from "./routes/CRSRegistrationRoutes";
import { BISFMPagesRoutes } from "./routes/BISFMPagesRoutes";
import { MinistryUpdatesRoutes } from "./routes/MinistryUpdatesRoutes";
import { NotificationsRoutes } from "./routes/NotificationsRoutes";
import { BlogRoutes } from "./routes/BlogRoutes";
import { ServicePagesRoutes } from "./routes/ServicePagesRoutes";
import FaqsPageRoutes from "./routes/FaqsPageRoutes";

import MessageFromManagementDesk from "./pages/MessageFromManagementDesk";
import OrganizationChart from "./pages/organization-chart/organization-chart";
import AdvisoryNetworkPage from "./pages/advisory-network-page/advisory-network-page";
  
// ============================================
// Admin Routes (Commented out)
// ============================================
// import AdminLoginPage from "./admin/AdminLoginPage";

// ============================================
// Main App Component
// ============================================
function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [videoPopupOpen, setVideoPopupOpen] = useState(false);
  const location = useLocation();

  const isAdminRoute = location.pathname === "/admin";

  return (
    <>
      {/* SEO & Schema Components */}
      <OrganizationSchema />
      <SEOBreadcrumbs />

      {/* Navigation Components */}
      {!isAdminRoute && <TopBar />}
      {!isAdminRoute && <Navbar />}

      {/* Scroll to Top */}
      {!isAdminRoute && <ScrollToTop />}
      {!isAdminRoute && (
        <ScrollToTopButton hide={popupOpen || videoPopupOpen} />
      )}

      {/* Main Routes */}
      <Routes>

        
        {/* Organization Chart Route */}
        <Route path="/organization-chart" element={<OrganizationChart />} />
       <Route
          path="/expert-bis-certification-panel-sun-certifications-india"
          element={<AdvisoryNetworkPage />}
        />


        {/* Home Route */}
        <Route
          index
          element={<Home onVideoPopupChange={setVideoPopupOpen} />}
        />

        {FaqsPageRoutes()}

        {/* Core Pages */}

        <Route
          path="/message-from-management-desk"
          element={<MessageFromManagementDesk />}
        />

        <Route
          path="/about"
          element={
            <Suspense fallback={<AboutSkeleton />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<ContactUsSkeleton />}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="sitemap"
          element={
            <Suspense fallback={<SitemapSkeleton />}>
              <Sitemap />
            </Suspense>
          }
        />

        {/* Utility Pages */}
        <Route
          path="/international-audits"
          element={
            <Suspense fallback={<InternationalAuditsSkeleton />}>
              <InternationalAudits />
            </Suspense>
          }
        />
        <Route
          path="/BIS-certification-grant-letter"
          element={
            <Suspense fallback={<InternationalAuditsSkeleton />}>
              <GrantLetter />
            </Suspense>
          }
        />
        <Route
          path="/awards-and-recognition"
          element={
            <Suspense fallback={<InternationalAuditsSkeleton />}>
              <AwardPage />
            </Suspense>
          }
        />
        <Route
          path="/seminars-and-exhibitions"
          element={
            <Suspense fallback={<ExhibitionSkeleton />}>
              <Exhibition />
            </Suspense>
          }
        />
        <Route
          path="/webinar"
          element={
            <Suspense fallback={<WebinarSkeleton />}>
              <Webinar />
            </Suspense>
          }
        />
        <Route
          path="/videos-about-bis-certification"
          element={
            <Suspense fallback={<VideosSkeleton />}>
              <Videos />
            </Suspense>
          }
        />
        <Route path="/backlinks" element={<BacklinksPage />} />

        {/* Notifications & Updates */}
        {NotificationsRoutes()}
        {MinistryUpdatesRoutes()}

        {/* Service Routes */}
        {ServicePagesRoutes()}
        {SchemeXPagesRoutes()}
        {BISFMPagesRoutes()}
        {BISCertificationPagesRoutes()}
        {ISIMarkPagesRoutes()}
        {CRSRegistrationRoutes()}

        {/* Blog Routes */}
        <Route path="Blogs" element={<LatestBlogs />} />
        {BlogRoutes()}

        {/* SchemeX Products Routes */}
        <Route path="SchemeX-products" element={<SchemeXProducts />} />
        {SchemeXProductsRoutes()}

        {/* Legal Pages */}
        <Route
          path="privacy-policy"
          element={
            <Suspense fallback={<PrivacyPolicySkeleton />}>
              <PrivacyPolicy />
            </Suspense>
          }
        />

        <Route path="terms-and-conditions" element={<TermsAndConditions />} />

        {/* Error Pages */}
        <Route path="404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />

        {/* Admin Routes (Commented out) */}
        {/* <Route path="/admin" element={<AdminLoginPage />} /> */}
      </Routes>

      {/* Footer & Floating Components */}
      {!isAdminRoute && <MobileNav />}
      {!isAdminRoute && (
        <SocialFloatingButtons hide={popupOpen || videoPopupOpen} />
      )}
      {!isAdminRoute && (
        <ContactFormPopup open={popupOpen} setOpen={setPopupOpen} />
      )}
    </>
  );
}

export default App;
