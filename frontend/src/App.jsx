// ============================================
// React & React Router Imports
// ============================================
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";

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
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import InternationalAudits from "./pages/InternationalAudits";
import Exhibition from "./pages/Exhibition";
import Sitemap from "./pages/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Error404 from "./pages/404Error";
import Webinar from "./pages/Webinar";
import Videos from "./pages/Videos";
import CheckBISCertificationEng from "./pages/CheckBISCertificationEng";
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
        {/* Home Route */}
        <Route
          index
          element={<Home onVideoPopupChange={setVideoPopupOpen} />}
        />

        {/* Core Pages */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="sitemap" element={<Sitemap />} />

        {/* Utility Pages */}
        <Route
          path="/check-bis-certification"
          element={<CheckBISCertificationEng />}
        />
        <Route path="international-audits" element={<InternationalAudits />} />
        <Route path="seminars-and-exhibitions" element={<Exhibition />} />
        <Route path="webinar" element={<Webinar />} />
        <Route path="videos-about-bis-certification" element={<Videos />} />
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
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
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
